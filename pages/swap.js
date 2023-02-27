import React from 'react'
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineArrowDown  } from "react-icons/ai";
import { useAccount} from "wagmi";
import Image from "next/image";
import ConnectBtn from './../components/btn/ConnectBtn';
function Swap() {
    const { isConnected, address } = useAccount();
  return (
    <div className='overflow-hidden pt-[80px] flex flex-col space-y-10 items-center h-screen' >
        <h1  className='press-font text-purple text-[30px]'>SWAP</h1>
        
        <div className="w-[80%]  border-2 border-purple max-w-[500px]  rounded-[30px] p-8">
            <div className="relative " >
            <input type="number" placeholder='0' className="w-full h-[180px] pb-[100px] md:pb-0 md:h-[100px] bg-purple-black rounded-[30px] p-4 text-white press-font text-[25px] outline-none " />

                <div className="absolute   right-[20px] bottom-[30px] text-white press-font flex rounded-full items-center bg-purple p-2 space-x-2 " >
                    
                    <Image src="/eth.png" width={20} height={20} className="" />
                    
                    <p>ETH</p>
                    <BsChevronDown />
                </div>

                <div className="absolute rounded-full w-[40px] h-[40px] bg-purple flex items-center justify-center absolute-center-x -bottom-[20%]" > 
                <AiOutlineArrowDown className="animate-bounce" />
                </div>
            </div>

            <div className="relative mt-10 " >
            <input type="number" placeholder='0' className="w-full h-[180px] pb-[100px] md:pb-0 md:h-[100px] border-2 border-purple bg-black rounded-[30px] p-4 text-white press-font text-[25px] outline-none " />

                <div className="absolute right-[20px] bottom-[30px] text-white press-font flex rounded-full items-center bg-purple p-2 space-x-2 " >
                    
                    <Image src="/avee.png" width={20} height={20} className="" />
                    
                    <p>AVEE</p>
                    <BsChevronDown />
                </div>

                
            </div>
            <div className='flex justify-center mt-10' >

            {
                !isConnected && (
                    <ConnectBtn />
                ) 
            }
            </div>

            
        </div>
    </div>
  )
}

export default Swap