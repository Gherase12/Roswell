import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { BiMicrophone } from "react-icons/bi";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import Link from "next/link";
import { toast } from "react-toastify";
import Roadmap from "./../components/Roadmap";
import Team from "../components/Team";
import { useAccount } from "wagmi";
import axios  from 'axios';
import Chat from './../components/Chat';
import Loading from "../components/Loading";

export default function Home() {
  const { isConnected, address } = useAccount();
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(false)
  const [aiResponse, setAiResponse] = useState(false)
  const notify = () => toast.warn("Coming soon", { theme: "dark" });


  const handleClick = async () => {
    if (!isConnected) {
      toast.error("Please connect your wallet", { theme: "dark" });
      return
    }

  setLoading(true)
    try {
      const response = await axios.post('https://www.roswelldex.ai/api/aiQuestion', {
        prompt: value
      });
      setAiResponse(response.data.content.content)
      setLoading(false)
      // console.log('Response:', response.data.content.content);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div className='relative overflow-hidden'>
      {aiResponse && (<Chat aiResponse={aiResponse} />)}
      
      <Head>
        <title>AI ROSWELL</title>
        <meta name='description' content='AI DEX built on Arbitrum' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.svg' />
      </Head>
      <section className='min-h-screen relative flex flex-col items-center overflow-hidden w-full'>
        <Image
          src='/robot-lg.webp'
          fill
          className='object-contain z-[10] hidden lg:flex '
        />

        <h1 className='text-purple press-font text-[20px] text-center  my-[80px] lg:text-[60px] max-w-[1000px] z-20 '>
          Welcome to the AI ROSWELL{" "}
        </h1>
        <input
          type='text'
          
          onChange={(e) => setValue(e.target.value)}
          placeholder='Ask me any question...'
          className='bg-purple-black w-[320px] h-[49px] rounded-full p-4 text-white z-20 lg:w-[700px] lg:mt-[300px] outline-none lg:h-[60px] '
        />
        {
          !loading ? (
            <button
            onClick={handleClick}
            className={`rounded-full ${
              value ? "bg-violet-700" : "bg-violet-700/25"
            } w-[70px] h-[70px]  flex items-center justify-center  my-[30px] z-20`}
          >
            <BiMicrophone className='text-white text-[30px]  ' />
          </button>
          ):(
            <div className="bg-violet-700 w-[70px] h-[70px] my-[30px] flex items-center justify-center rounded-full z-20 ">
              
            <Loading />
            </div>
          )
        }
       
        <Image
          src={"/robot-sm.webp"}
          width={300}
          height={300}
          className='lg:hidden'
        />
      </section>

      {/* second section */}

      <section className=' pt-[100px] xl:px-[194px] '>
        <div className='lg:flex '>
          <div className='flex flex-col items-center lg:justify-center lg:items-start  '>
            <p className='text-white/60 font-bold px-[42px] text-[20px] tracking-tighter max-w-[656px] press-font'>
              Meet Roswell, the intelligent robot designed to enhance your
              experience in a digital ecosystem. Powered by Arbitirum will be
              the most powerful Dex with advanced AI, you can swap, farm, and
              stake coins for rewards, while playing against Roswell for
              incentives. Roswell&apos;s personalized interface and constant
              learning make it easy to stay ahead of the game. Join now and
              discover a new world of possibilities with Roswell as your guide.
            </p>

            <button
              onClick={notify}
              className='animate-pulse text-purple font-bold flex items-center bg-purple-black mx-auto lg:mx-[42px] my-10 justify-center w-[155px] h-[55px] rounded-full'
            >
              Join The Quest
            </button>
          </div>
          <div className='w-[334px]  h-[356px]  xl:h-[443px] xl:w-[443px] relative mx-auto  '>
            <Image src='/drone.png' className='object-contain' fill />
          </div>
        </div>

        {/* 2nd */}
        <div className='lg:flex lg:flex-row-reverse '>
          <div className='flex flex-col items-center lg:justify-center lg:items-start  '>
            <p className='text-white/60 font-bold px-[42px] press-font tracking-tighter  text-[20px] max-w-[656px]'>
              This Roswell robot will help us to enjoy the AI crypto ecosystem
              much easier. We will swap, farm and play with Roswell.
              <br /> <br /> -Trade
              <br />
              -Play games (Earn rewards)
              <br />
              -Launchpad (Tier 1 projects)
              <br />
              -NFT marketplace (trade NFTS incredibly low fees)
            </p>

            <button
              onClick={notify}
              className='animate-pulse  text-purple font-bold flex items-center bg-purple-black mx-auto lg:mx-[42px] my-10 justify-center w-[155px] h-[55px] rounded-full'
            >
              Join The Quest
            </button>
          </div>
          <div className='w-[334px]  h-[356px]  xl:h-[443px] xl:w-[443px] relative mx-auto  '>
            <Image src='/drone-2.png' className='object-contain' fill />
          </div>
        </div>
      </section>

      <Roadmap />
      <Team />

      {/* card section */}

      <footer className='flex flex-col mt-[50px]  '>
        <div className=' flex flex-col items-center'>
          {/* <h2 className='text-white/60 text-center font-bold text-xl px-5 md:text-[30px] xl:text-[40px] '>
            Roswell Ai provides safe & low-cost trading experience
          </h2> */}
          <Link
            href='https://roswells-ai.gitbook.io/roswell.ai/'
            target='_blank'
            className='flex flex-col items-center  md:space-x-10  md:flex-row  lg:mt-[91px]'
          >
            <button className='animate-pulse font-bold text-purple flex items-center bg-purple-black mx-auto  my-10 justify-center w-[155px] h-[55px] rounded-full'>
              LEARN NOW
            </button>
          </Link>
        </div>

        <div className='flex flex-col lg:flex-row w-full lg:justify-between lg:px-[30px]  items-center mt-[50px] '>
          {/*  */}
          <div className='text-purple flex text-[40px] space-x-10'>
            <Link href='https://twitter.com/roswellaidex' target='_blank'>
              <BsTwitter />
            </Link>

            <Link href='https://t.me/Roswellai' target='_blank'>
              <FaTelegramPlane />
            </Link>
          </div>

          {/*  */}
          <div className='flex text-purple lg:ml-14  justify-center items-center press-font space-x-[20px] '>
            <Image src='logo.svg' width={90} height={117} />
            <p className='text-purple text-[20px]'>ROSWELL</p>
          </div>
          {/*  */}
        </div>
      </footer>
    </div>
  );
}
