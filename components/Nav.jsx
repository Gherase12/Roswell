import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsChevronDown, BsTwitter } from "react-icons/bs";
import { useAccount} from "wagmi";
import { AiOutlineClose } from "react-icons/ai";
import { FaWallet, FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import ConnectBtn from './btn/ConnectBtn';
import { toast } from 'react-toastify';

function Nav() {
  const [open, setIsOpen] = useState(false);
  
  const { isConnected, address } = useAccount();
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  
  const reverseObjects = () => {
    setNetworks([networks[1], networks[0]]);
  };

  const notify = () => toast.warn("Launchpad coming soon",{theme: "dark"});

  return (
    <>
      <div className=' flex items-center justify-between lg:justify-around px-[18px] fixed top-0 z-50 left-0 right-0 h-[70px] bg-black lg:px-[30px]  lg:h-[100px]'>
      <Link href="/" className='hidden lg:flex text-purple  justify-center items-center press-font space-x-[20px]  '>
          <Image src='logo.svg' width={90} height={117} />
          <p className='text-purple text-[20px]'>ROSWELL</p>
        </Link>


        <li className='hidden lg:flex text-white press-font space-x-10 '>
          <Link href="/" >HOME</Link>
          <Link href="/swap" >TRADE</Link>
          <Link href="/farms" >EARN</Link>
          <Link href="/games" >GAMES</Link>
          <button onClick={notify} >LAUNCHPAD</button>
        </li>

        
        <Link className='lg:hidden' href="/" >
        <Image src='/logo.svg' width={64} height={64} />
        </Link>
        <RxHamburgerMenu
          onClick={openModal}
          className='text-white text-[30px] mr-2 lg:hidden'
        />
        <div className=' hidden lg:flex space-x-5  '>
          <div  className='relative rounded-full bg-purple/30 flex items-center p-2 space-x-2 px-3 '>
            <Image src={"/arbitrum-logo.svg"} width={20} height={20} />
            <p className='font-white font-bold text-white'>ARBITRUM</p>
            
          </div>
          {
            isConnected ? (
              <div className='rounded-full bg-purple/30 flex items-center p-2 space-x-2 px-5 '>
              <FaWallet className='text-violet-400' />
              <p className='text-white truncate w-[70px]'>{address}</p>
            </div>
            ): (
              <ConnectBtn />
            )
          }
         



        </div>
      </div>

      <div
        className={`${
          !open
            ? "fixed right-[120%]"
            : " text-gray-4 fixed top-0 pt-[100px] bg-black   left-0 h-screen  w-[100%] px-[29px] nav-container  overflow-y-scroll  flex  flex-col  items-center      duration-500 ease-in-out z-[100] xl:hidden"
        }  `}
      >
        <AiOutlineClose
          onClick={() => closeModal()}
          className=' absolute top-[20px] right-[20px] text-white text-[25px]'
        />

        <div className='flex text-purple  justify-center items-center press-font space-x-[20px] '>
          <Image src='logo.svg' width={90} height={117} />
          <p className='text-purple text-[20px]'>ROSWELL</p>
        </div>
        <li className=' text-white press-font text-[30px] flex flex-col space-y-5 mt-20 '>
        <Link href="/" >HOME</Link>
        <Link href="/swap" onClick={closeModal} >TRADE</Link>
        <Link href="/farms" onClick={closeModal} >EARN</Link>
        <Link href="/games" onClick={closeModal} >GAMES</Link>
        <button onClick={notify} >LAUNCHPAD</button>
        </li>
        <div className='text-purple flex text-[40px] space-x-10 mt-10'>
            <FaTelegramPlane />
            <BsTwitter />
          </div>
      </div>
    </>
  );
}

export default Nav;
