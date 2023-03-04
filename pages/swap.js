import React, {useState, useEffect} from "react";
import { useQuery } from 'react-query';
import {  useSendTransaction, useWaitForTransaction } from "wagmi";
import { useAccount } from "wagmi";
import axios  from 'axios';
import ConnectBtn from "./../components/btn/ConnectBtn";
import { message } from "antd";
import SwapBord from "../components/SwapBord";
import { tokenList } from './../data/tokenList';
import { toast } from 'react-toastify';
import Slippage from './../components/Slippage';
import { fetchPrices } from './../fetchers/getPrices';
import { Atokens } from './../data/arbitrumTokens';


function Swap() {

  const { isConnected, address } = useAccount();
  // const { address, isConnected } = props;
  const [messageApi, contextHolder] = message.useMessage();
  const [slippage, setSlippage] = useState(2.5);
  const [tokenOneAmount, setTokenOneAmount] = useState(null);
  const [tokenTwoAmount, setTokenTwoAmount] = useState(null);
  const [tokenOne, setTokenOne] = useState(Atokens[0]);
  const [tokenTwo, setTokenTwo] = useState(Atokens[1]);
  const [isOpen, setIsOpen] = useState(false);
  const [changeToken, setChangeToken] = useState(1);
  const [prices, setPrices] = useState(null);
  const [txDetails, setTxDetails] = useState({
    to:null,
    data: null,
    value: null,
  }); 

  const { data:priceData,  isError, refetch } = useQuery(["priceData", tokenOneAmount], () => fetchPrices(tokenOneAmount,tokenOne.address,tokenTwo.address ,tokenOne.decimals),{ cacheTime: 0,onSuccess: (data) => {
    setTokenTwoAmount((Number(data.price) / (10 ** tokenTwo.decimals)).toFixed(2));
  }});
 

  const notify = () => toast.warn("Swap coming soon",{theme: "dark"});

  const {data, sendTransaction} = useSendTransaction({
    request: {
      from: address,
      to: String(txDetails.to),
      data: String(txDetails.data),
      value: String(txDetails.value),
    }
  })
  
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })

  function handleSlippageChange(e) {
    setSlippage(Number(e.target.value));
  }

  function changeAmount(e) {
    console.log(e.target.value)
    setTokenOneAmount(e.target.value);
    if(e.target.value){
      setTokenTwoAmount((Number(priceData?.price) / (10 ** tokenTwo.decimals)))
    }else{
      setTokenTwoAmount(0);
    }
  }

  function switchTokens() {
    // setPrices(null);
    const tokenOneAmountPrev = tokenOneAmount
    setTokenOneAmount(tokenTwoAmount);
    setTokenTwoAmount(tokenOneAmountPrev);
    const one = tokenOne;
    const two = tokenTwo;
    setTokenOne(two);
    setTokenTwo(one);
  }

  

  function modifyToken(){
    

   
    setTokenOneAmount(0)
    setTokenTwoAmount(0)
    
  }

 

  async function fetchDexSwap(){
    console.log(tokenOne.address)
    console.log(tokenTwo.address)
    console.log(tokenOneAmount.padEnd(tokenOne.decimals+tokenOneAmount.length, '0'))
    const allowance = await axios.get(`https://api.1inch.io/v5.0/42161/approve/allowance?tokenAddress=${tokenOne.address}&walletAddress=${address}`)
  
    if(allowance.data.allowance === "0"){

      const approve = await axios.get(`https://api.1inch.io/v5.0/42161/approve/transaction?tokenAddress=${tokenOne.address}`)

      setTxDetails(approve.data);
      console.log("not approved")
      return

    }

    const tx = await axios.get(
      `https://api.1inch.io/v5.0/42161/swap?fromTokenAddress=${tokenOne.address}&toTokenAddress=${tokenTwo.address}&amount=${tokenOneAmount.padEnd(tokenOne.decimals+tokenOneAmount.length, '0')}&fromAddress=${address}&slippage=${slippage}`
    )

    let decimals = Number(`1E${tokenTwo.decimals}`)
    setTokenTwoAmount((Number(tx.data.toTokenAmount)/decimals).toFixed(2));

    setTxDetails(tx.data.tx);
  
  }


  

  useEffect(()=>{

      if(txDetails.to && isConnected){
        sendTransaction();
      }
  }, [txDetails])

  useEffect(()=>{

    messageApi.destroy();

    if(isLoading){
      messageApi.open({
        type: 'loading',
        content: 'Transaction is Pending...',
        duration: 0,
      })
    }    

  },[isLoading])

  useEffect(()=>{
    messageApi.destroy();
    if(isSuccess){
      messageApi.open({
        type: 'success',
        content: 'Transaction Successful',
        duration: 1.5,
      })
    }else if(txDetails.to){
      messageApi.open({
        type: 'error',
        content: 'Transaction Failed',
        duration: 1.50,
      })
    }


  },[isSuccess])

 



  return (
    <div className='overflow-hidden pt-[80px] flex flex-col space-y-10 items-center h-screen'>
      
      <h1 className='press-font text-purple text-[30px]'>SWAP</h1>
        
      <div className='w-[80%]  border-2 border-purple max-w-[500px] space-y-10 rounded-[30px] p-8'>
        <div>
          <p className="text-white font-bold font-press mb-2">Slippage Tolerance:</p>
          <Slippage slippage={slippage} handleSlippageChange={handleSlippageChange} />
          
        </div>
        <SwapBord refetch={refetch} prices={prices} coin={tokenOne} setCoin={setTokenOne} modifyToken={modifyToken}  switchTokens={switchTokens} tokenAmount={tokenOneAmount} changeAmount={changeAmount} index={0} disabled={false}  />
        <SwapBord  isError={ isError} refetch={refetch} prices={prices} coin={tokenTwo} setCoin={setTokenTwo} modifyToken={modifyToken} switchTokens={switchTokens} tokenAmount={tokenTwoAmount} changeAmount={changeAmount} index={1} disabled={true} />

        
        <div className='flex justify-center mt-10'>
          {!isConnected ? <ConnectBtn /> : (
            <button disabled={!tokenOneAmount} onClick={fetchDexSwap} className="rounded-full bg-purple/30 flex items-center p-2 space-x-2 px-5 text-white font-bold" >
                  Swap
            </button>
          )}
        </div>
      </div>


    </div>
  );
}

export default Swap;