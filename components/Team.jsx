import React from "react";

function Team() {

    const team = [
        {
            name: "Jason",
            role:"Chief Operating Officer",
            desc: "Highly experienced Chief Operating Officer with over 7 years of business experience working in the software and IT industry. Developes strategic plans to achieve long-term goals. In addition to his technical skills, Jason possess excellent communication skills that enable him to build relationships with stakeholders at all levels."
        },
        {
            name: "Horus",
            role:"Chief Marketing Officer",
            desc: "Highly skilled marketer with over 7 years of experience in the cryptocurrency industry. He has a proven track record of developing and implementing successful marketing strategies that have driven growth, increased brand awareness, and accelerated user adoption for various crypto projects. Horus is also adept at building strong partnerships within the industry and leading cross-functional teams to achieve exceptional results."
        },
        {
            name: "Fred",
            role:"Chief Technical Officer",
            desc: "Is a highly skilled Lead Software Engineer with over 10 years of experience in the blockchain technology industry, including expertise in Solidity. He has led cross-functional teams and developed complex smart contracts for various blockchain projects. Fred has a deep understanding of blockchain architecture, consensus algorithms, and cryptography protocols. His technical skills combined with his leadership abilities make him an ideal candidate to lead software development teams in the rapidly evolving blockchain industry."
        },

    ]

  return (
    <section className='bg-black'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 '>
        <div className='mx-auto max-w-screen-sm text-center mb-8 lg:mb-16'>
          <h2 className='mb-4 text-4xl lg:text-[60px] tracking-tight font-extrabold text-purple '>
            Our Team
          </h2>
          <p className=' text-purple lg:my-[40px] sm:text-xl  font-bold'>
          The team began working on developing the platform, focusing on building out the core infrastructure and implementing robust security measures.
          </p>
        </div>
        <div className='grid gap-8 mb-6 lg:mb-16 md:grid-cols-2'>
       {team.map(({name, role, desc},i)=> (   
       <div key={i} className='items-center border-2 border-purple bg-black rounded-lg shadow-lg shadow-purple sm:flex '>
            <a href='#'    >
              <img className=" w-full  object-contain lg:h-[300px]  rounded-lg sm:rounded-none sm:rounded-l-lg" src={`/robots/img-${i}.webp`} alt="Robot Avatar"/>
            </a>
            <div className='p-4'>
              <h3 className='text-2 xl font-bold tracking-tight press-font text-purple -white'>
                <a href='#'>{name}</a>
              </h3>
              <span className='text-white font-bold '>
                {role}
              </span>
              <p className='mt-3 mb-4 font-bold  overflow-y-scroll w-full md:max-w-[300px] scrollbar-hide  max-h-[140px] text-purple '>
                {desc}
              </p>
              
            </div>
          </div>
))}


        
        </div>
      </div>
    </section>
  );
}

export default Team;
