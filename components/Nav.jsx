import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsChevronDown } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import Image  from 'next/image';


function Nav() {
  return (
    <div className=' flex items-center justify-between px-[18px] fixed top-0 z-50 left-0 right-0 h-[70px] bg-black lg:px-[30px]'>
        <li className="hidden lg:flex text-white press-font " >
            <ul>TRADE</ul>
            <ul>EARN</ul>
        </li>

            <div className="hidden lg:flex text-purple  justify-center items-center press-font space-x-[20px] " >
                <Image src="logo.svg" width={90}  height={117}  />
                <p className="text-purple text-[20px]" >ROSWELL</p>
            </div>

        <Image src="/logo.svg" width={64} height={64} className="lg:hidden" />
      <RxHamburgerMenu className="text-white text-[30px] mr-2 lg:hidden" />
      <div className=" hidden lg:flex space-x-5 ">
        <div className="rounded-full bg-purple/30 flex items-center p-2 space-x-2 ">
            <Image src="/arbitrum-logo.svg" width={20} height={20} />
            <p className="font-white font-bold text-white" >ARBITRUM ONE</p>
            <BsChevronDown className="text-[10px] text-white " />
        </div>

        <div className="rounded-full bg-purple/30 flex items-center p-2 space-x-2 " >
            <FaWallet className="text-violet-400" />
            <p className="text-white">0X...DBDE</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Nav;
