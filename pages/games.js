import React from 'react'
import Image  from 'next/image';
import GameCard from './../components/GameCard';

function Games() {

    const games = ["Nexa", "Vyxen", "Zorbot", "Cygnus", "Synthia" , "Zenith"]
  return (
    <div className='overflow-x-hidden min-h-screen  md:pt-[80px] flex flex-col space-y-10 items-center relative' >
        <Image src={"/games-bg.png"} fill className="absolute " />
        <h1 className='press-font text-white text-[30px] z-20  text-center'>PLAY TO EARN GAMES</h1>

            <div className='grid grid-cols-1 lg:grid-cols-2  2xl:grid-cols-3  gap-10' >
                {
                    games.map((g , i)=>(
                        <GameCard key={i} i={i} name={g} />
                    ))
                }
            </div>

        
    </div>
  )
}

export default Games