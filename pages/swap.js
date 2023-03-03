import React, {useState, useEffect} from "react";
import { BsChevronDown } from "react-icons/bs";
import { useSendTransaction, useWaitForTransaction } from "wagmi";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useAccount } from "wagmi";
import Image from "next/image";
import ConnectBtn from "./../components/btn/ConnectBtn";
import CoinModal from './../components/CoinModal';
import { Input, Popover, Radio, Modal, message } from "antd";
import axios from "axios";
import SwapBord from "../components/SwapBord";
import { tokenList } from './../data/tokenList';
import { toast } from 'react-toastify';
function Swap() {

  const { isConnected, address } = useAccount();
  // const { address, isConnected } = props;
  const [messageApi, contextHolder] = message.useMessage();
  const [slippage, setSlippage] = useState(2.5);
  const [tokenOneAmount, setTokenOneAmount] = useState(0);
  const [tokenTwoAmount, setTokenTwoAmount] = useState(0);
  const [tokenOne, setTokenOne] = useState(tokenList[0]);
  const [tokenTwo, setTokenTwo] = useState(tokenList[1]);
  const [isOpen, setIsOpen] = useState(false);
  const [changeToken, setChangeToken] = useState(1);
  const [prices, setPrices] = useState(null);
  const [txDetails, setTxDetails] = useState({
    to:null,
    data: null,
    value: null,
  }); 

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
    setSlippage(e.target.value);
  }

  function changeAmount(e) {
    setTokenOneAmount(e.target.value);
    if(e.target.value && prices){
      setTokenTwoAmount((e.target.value * prices.ratio).toFixed(2))
    }else{
      setTokenTwoAmount(null);
    }
  }

  function switchTokens() {
    setPrices(null);
    const tokenOneAmountPrev = tokenOneAmount
    setTokenOneAmount(tokenTwoAmount);
    setTokenTwoAmount(tokenOneAmountPrev);
    const one = tokenOne;
    const two = tokenTwo;
    setTokenOne(two);
    setTokenTwo(one);
    fetchPrices(two.address, one.address);
  }

  

  function modifyToken(i, index){
    

    if(index == 0 ){
      // setTokenOneAmount(prices.to);
      fetchPrices(tokenList[i].address, tokenTwo.address)
    } else {
      // setTokenTwo(tokenList[i]);
      fetchPrices(tokenOne.address, tokenList[i].address)
    }
    setTokenOneAmount(0)
    setTokenTwoAmount(0)
    console.log(prices)
  }

  async function fetchPrices(one, two){
    //http://localhost:3000/api/tokenPrice
      const res = await axios.get(
        `https://www.roswellaicoin.com/api/tokenPrice`
        // `http://localhost:3000/api/tokenPrice`
        , {
        params: {addressOne: one, addressTwo: two}
      }, { method: "GET" })

      
      setPrices(res.data)
  }

  async function fetchDexSwap(){

    const allowance = await axios.get(`https://api.1inch.io/v5.0/1/approve/allowance?tokenAddress=${tokenOne.address}&walletAddress=${address}`)
  
    if(allowance.data.allowance === "0"){

      const approve = await axios.get(`https://api.1inch.io/v5.0/1/approve/transaction?tokenAddress=${tokenOne.address}`)

      setTxDetails(approve.data);
      console.log("not approved")
      return

    }

    const tx = await axios.get(
      `https://api.1inch.io/v5.0/1/swap?fromTokenAddress=${tokenOne.address}&toTokenAddress=${tokenTwo.address}&amount=${tokenOneAmount.padEnd(tokenOne.decimals+tokenOneAmount.length, '0')}&fromAddress=${address}&slippage=${slippage}`
    )

    let decimals = Number(`1E${tokenTwo.decimals}`)
    setTokenTwoAmount((Number(tx.data.toTokenAmount)/decimals).toFixed(2));

    setTxDetails(tx.data.tx);
  
  }


  useEffect(()=>{

    fetchPrices(tokenList[0].address, tokenList[1].address)

  }, [])

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
          <Radio.Group className="text-white  border-purple font-bold" value={slippage} onChange={handleSlippageChange}   >
          <Radio.Button className="bg-black border-purple text-purple  " value={0.5}>0.5%</Radio.Button>
          <Radio.Button className="bg-black border-purple text-purple  " value={2.5}>2.5%</Radio.Button>
          <Radio.Button className="bg-black border-purple text-purple  " value={5}>5.0%</Radio.Button>
        </Radio.Group>
        </div>
        <SwapBord prices={prices} coin={tokenOne} setCoin={setTokenOne} modifyToken={modifyToken} switchTokens={switchTokens} tokenAmount={tokenOneAmount} changeAmount={changeAmount} index={0} disabled={!prices} />
        <SwapBord  prices={prices} coin={tokenTwo} setCoin={setTokenTwo} modifyToken={modifyToken} switchTokens={switchTokens} tokenAmount={tokenTwoAmount} changeAmount={changeAmount} index={1} disabled={true} />

        {/* <div className='relative mt-10 '>
          <input
            type='number'
            placeholder='0'
            className='w-full h-[180px] pb-[100px] md:pb-0 md:h-[100px] border-2 border-purple bg-black rounded-[30px] p-4 text-white press-font text-[25px] outline-none '
          />

          <div className='absolute right-[20px] bottom-[30px] text-white press-font flex rounded-full items-center bg-purple p-2 space-x-2 '>
            <Image src='/avee.png' width={20} height={20} className='' />

            <p>AVEE</p>
            <BsChevronDown />
          </div>
        </div> */}
        <div className='flex justify-center mt-10'>
          {!isConnected ? <ConnectBtn /> : (
            <button onClick={notify} className="rounded-full bg-purple/30 flex items-center p-2 space-x-2 px-5 text-white font-bold" >
                  Swap
            </button>
          )}
        </div>
      </div>


    </div>
  );
}

export default Swap;