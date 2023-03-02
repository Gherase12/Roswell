import React from 'react'
import Image  from 'next/image';

function Games() {
  return (
    <div className='overflow-hidden pt-[80px] flex flex-col space-y-10 items-center relative' >
        <Image src={"/games-bg.png"} fill className="absolute " />
        <h1 className='press-font text-white text-[30px] z-20'>PLAY TO EARN GAMES</h1>

            <div className='grid ' >
                
            </div>

        
    </div>
  )
}

export default Games