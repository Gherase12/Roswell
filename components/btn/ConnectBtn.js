import React from 'react'
import { useConnect } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

function ConnectBtn() {
    const { connectAsync } = useConnect();

  const handleAuth = async () => {
    const { account, chain } = await connectAsync({
      connector: new MetaMaskConnector(),
    });

    const userData = { address: account, chainId: chain.id };

    console.log(userData);
  };



  return (
    <button onClick={handleAuth} className='rounded-full bg-purple/30 flex items-center p-2 space-x-2 px-5 text-white font-bold  ' >Connect</button>
  )
}

export default ConnectBtn