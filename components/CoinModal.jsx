import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { tokenList } from "./../data/tokenList";
import Image from "next/image";
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/evm-utils";

function CoinModal({ closeModal,modifyToken, isOpen, setCoin, coin, index }) {
  const [coinAddress, setCoinAddress] = useState();
//   const [serachCoin, setSearchCoin] = useState();

  const handleClick = (i) => {
    setCoin(tokenList[i]);
    modifyToken(i)
    closeModal();
  };





  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-black border-2 border-purple py-6  px-3 flex flex-col items-center shadow-xl transition-all'>
                <h2 className=' text-center  text-purple font-bold text-[20px]'>
                  Select a Token{" "}
                </h2>
                <input
                  // onChange={(e)=> setCoinAddress(e.target.value)}
                  onChange={(e) => getCoin()}
                  // onChange={ }
                  type='text'
                  placeholder='Search name or paste address '
                  className='bg-purple-black my-[30px] w-[300px]  h-[49px] rounded-full p-4 text-white z-20   outline-none border-2 border-purple'
                />
                <h3 className='text-start  text-purple font-bold text-[20px] w-[80%] '>
                  Common tokens
                </h3>

                {!coinAddress ? (
                  <div className='w-[80%]  border-2 border-purple max-h-[400px] overflow-y-scroll '>
                    {tokenList.map(({ ticker, img }, i) => (
                      <div
                        key={i}
                        onClick={() => handleClick(i, index)}
                        className={` ${ticker == coin.ticker && "hidden"} w-full h-[50px] border-2 border-purple hover:bg-purple cursor-pointer  flex pl-5 space-x-5 press-font items-center`}
                      >
                        <Image
                          src={img}
                          width={30}
                          height={30}
                          className='rounded-full'
                        />
                        <p className='text-white font-bold '>{ticker}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div></div>
                  //     <div onClick={() => handleClick(i)} className="w-full h-[50px] border-2 border-purple hover:bg-purple cursor-pointer  flex pl-5 space-x-5 press-font items-center" >
                  //     <Image src={img} width={30} height={30} className="rounded-full" />
                  //     <p className="text-white font-bold " >{ticker}</p>
                  // </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default CoinModal;
