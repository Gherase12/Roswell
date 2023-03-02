import React , {useState} from "react";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdVerified } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { motion } from 'framer-motion';
function Farms() {
  const [open, setIsOpen] = useState();
  const dropdownVariants = {
    closed: { height: 0, opacity: 0 },
    open: { height: "auto", opacity: 1 },
  };

  const notify = () => toast.warn("Farm coming soon",{theme: "dark"});


  return (
    <div className='overflow-hidden pt-[80px] flex flex-col space-y-10 items-center '>
      <h1 className='press-font text-purple text-[30px]'>FARMS</h1>
      <div className='w-full md:w-[70%] max-w-[1300px]    '>
        {
          [...Array(4)].map((_ , i)=>(
            <div key={i} >

            <div className='w-full md:h-[100px] flex flex-col md:flex-row purple-gradient space-y-5 md:space-y-0 md:justify-between p-4 md:p-0 md:items-center md:px-[30px]'>
            <div className='flex space-x-2 px-5 py-3 '>
              <Image src='/eth.png' width={30} height={30} />
              <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-black text-white font-bold" >?</div>
              {/* <Image src='/avee.png' width={30} height={30} /> */}
            </div>
  
            <div className='flex  justify-between md:space-x-[40px] '>
              <div className='flex items-center space-x-2 '>
                <MdVerified className='text-black  text-[20px]' />
                <p className='text-white font-bold '>VERIFIED</p>
              </div>
  
              <div className='flex flex-col items-center text-white/60 font-bold '>
                <p>EARNED</p>
                <p>0</p>
              </div>
  
              <div className='flex flex-col items-center  font-bold '>
                <p className="text-white/60" >APR</p>
                <p className="text-white" >?%</p>
              </div>
            </div>
  
            <div className="flex items-center justify-between md:space-x-[30px] " >
            <div className='flex flex-col items-center  font-bold '>
                <p className="text-white/60" >LIQUIDITY</p>
                <p className="text-white" >?</p>
              </div>
  
            <div className='flex flex-col items-center  font-bold '>
                <p className="text-white/60" >MULTIPLIER</p>
                <p className="text-white" >?X</p>
              </div>
  
              <IoIosArrowUp onClick={()=> open == i ? setIsOpen("ana") : setIsOpen(i)} className={`text-purple ${open == i && "rotate-180" } transition duration-100  text-[25px] `} />
            </div>
          </div>
          <motion.div
          initial='closed'
          animate={open == i ? "open" : "closed"}
          variants={dropdownVariants}
          transition={{ duration: 0.5 }}
          className="w-full  flex flex-col md:flex-row justify-around border-2 border-purple p-10 text-white">
              <ul className="text-white text-[12px]  flex flex-col justify-around space-y-[10px] font-bold ">
                <li>GET USDC ROSWELL LP</li>
                <li>VIEW CONTRACT</li>
                <li>SEE PAIR INFO</li>
              </ul>

              <div className="border-2 border-purple w-[420px] h-[100px] flex justify-around items-center " >
                <div className="flex flex-col items-center font-bold " >
              <p>Roswell earned</p>
                <p>0</p>
                </div>
              <button disabled={true} className="bg-purple opacity-30 px-7 py-4 font-bold " >
                HARVEST
              </button>
              </div>

              <div className="border-2 border-purple w-[400px] h-[100px] px-10 flex items-center  justify-between " >
              <p className="font-bold  ">
                ENABLE FARM
              </p>
              <button onClick={notify} className="bg-purple flex justify-center px-7 py-4 font-bold w-[100px] text-center " >
              ENABLE
              </button>
              </div>
          </motion.div>
            </div>
          ))
        }

        
      </div>
    </div>
  );
}

export default Farms;
