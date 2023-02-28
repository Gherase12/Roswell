import React from 'react'
import CoinModal from './CoinModal';
import { useState } from 'react';
import Image from "next/image";

import { BsChevronDown } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";
import { tokenList } from './../data/tokenList';

function SwapBord({coin,prices, setCoin, index , changeAmount,switchTokens,modifyToken, tokenAmount, disabled}) {
    let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }


  


  return (
    <div className='relative '>
        <CoinModal index={index} isOpen={isOpen} coin={coin} setCoin={setCoin} closeModal={closeModal} modifyToken={modifyToken}  />
        {/* <div className="absolute left-[20px] bottom-[8px] text-[12px] text-white/20 font-bold " >
            {index == 0 ? prices?.tokenOne : prices?.tokenTwo }
        </div > */}
          <input
            type='number'
            onChange={changeAmount}
            placeholder='0'
            value={tokenAmount}
            disabled={disabled}
            className={`w-full h-[180px] pb-[100px] md:pb-0 md:h-[100px] ${index == 0 ? "bg-purple-black ": "bg-black border-2 border-purple"} rounded-[30px] p-4 text-white press-font text-[25px] outline-none `}
          />
          <div onClick={openModal} className='absolute cursor-pointer   right-[20px] bottom-[30px] text-white press-font flex rounded-full items-center bg-purple p-2 space-x-2 '>
            <Image src={coin?.img} width={20} height={20} className='' />

            <p>{coin?.ticker}</p>
            <BsChevronDown />
          </div>
            {index == 0 && (

          <div onClick={switchTokens} className='absolute rounded-full w-[40px] h-[40px] bg-purple flex items-center justify-center absolute-center-x -bottom-[20%]'>
            <AiOutlineArrowDown className='animate-bounce' />
          </div>
            )}
        </div>
  )
}

export default SwapBord