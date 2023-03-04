import React from 'react'
import Image  from 'next/image';
import GameCard from './../components/GameCard';

function Games() {

    const games = [
        {
            name:"Vyxen",
            desc:"In Vyxen, you take on the role of a fierce warrior from a distant planet who is forced to flee to Earth in search of allies and weapons to aid in your fight against an invading alien horde. Armed with powerful weapons and advanced technology, you must navigate through treacherous terrain and face off against wave after wave of alien attackers. Can you lead your team to victory and save both your worlds from destruction?"
        },
        {
            name:"Nexa",
            desc:"A rocket ship mini game that takes players on an intergalactic adventure. As the captain of the Nexa spacecraft, players must navigate through asteroid fields and battle alien ships to reach their destination. However, things take a turn when the ship's AI system malfunctions and turns against the crew. With limited resources and time, players must work together to fix the system and save themselves before it's too late."
        },
        {
            name:"Zorbot",
            desc:"A puzzle game where players control a small robot navigating through various levels. The robot, named Zorbot, is on a mission to save his home planet from an impending asteroid collision. Along the way, Zorbot must collect resources and avoid obstacles to power up his ship and escape the planet before it's too late. However, there are evil alien creatures trying to stop Zorbot from completing his mission and saving his planet."
        },
        {
            name:"Cygnus ",
            desc:"A thrilling UFO mini-game that takes place in the year 2050. You play as an alien who has crash-landed on Earth and must navigate through various obstacles to repair your ship and return home. Along the way, you encounter hostile humans who are determined to capture you and study your technology. Can you outsmart them and make it back to your planet before it's too late?"
        }
        ]
  return (
    <div className='overflow-x-hidden min-h-screen  md:pt-[80px] flex flex-col space-y-10 items-center relative' >
        <Image src={"/games-bg.png"} fill className="absolute " />
        <h1 className='press-font text-white text-[30px] z-20  text-center'>PLAY TO EARN GAMES</h1>

            <div className='grid grid-cols-1 lg:grid-cols-2  2xl:grid-cols-3  gap-10' >
                {
                    games.map(({name, desc} , i)=>(
                        <GameCard key={i} i={i} name={name}  desc={desc} />
                    ))
                }
            </div>

        
    </div>
  )
}

export default Games