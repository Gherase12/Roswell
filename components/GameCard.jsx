import React from 'react'
import Image  from 'next/image';
import {  toast } from 'react-toastify';
function GameCard({name , i}) {
    const notify = () => toast.warn("Games coming soon",{theme: "dark"});

  return (
    <div className='w-auto  md:w-[500px] h-[300px] p-[14px] rounded-[22px] z-20 relative '>
        <Image src={`/games/img-${i}.png`} fill className='-z-10' />
        <div className='rounded-[22px] p-[10px] space-y-5 backdrop-blur-md  h-full w-[230px] text-white z-30 flex flex-col items-start justify-around '>
            <div className="w-full text-[30px]" >

            <h2 >{name}</h2>
            </div>
            <p className='w-[165px font-white]' >Players control a rocket ship and must navigate through an asteroid field, avoiding obstacles and collecting power-ups.</p>
            <button onClick={notify} className='bg-purple px-[20px] py-2 rounded-md' >Coming soon</button>
        </div>

    </div>
  )
}

export default GameCard