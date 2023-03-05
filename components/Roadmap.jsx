import React from "react";


function Roadmap() {
    const roadmap = [{
      title: "Q1 2023",
      desc: "Private beta version of the platform was launched, which included basic trading functionalities and integration with popular crypto wallets.AI Algorithm refinement improving its accuracy in predicting market trends and making profitable trades.Announcement to launch on Arbitrum blockchain due to its fast transaction speeds and low gas fees.Presale & Launch will begin and deployed on the Arbitrum network",
    },
    {
      title: "Q2 2023",
      desc: "Public Beta Version of the platform will be releasedMini Game MVP will be released to start promoting engagement within the platform Partnership with new gaming projects within the Arbitrum network will commence to expand the gaming divisionDEX Pool Aggregation will be added to support liquidity from different dexes. Roswell is not a DEX that competes with other DEXes but a DEX that plans synergies with all other DEXE’s within the Arbitrum ecosystem.",
    },
    {
      title: "Q3-Q4 2023",
      desc: "Alpha Version of the AI DEX will be released along with several integrations that has been made with other partnersFull AI integration with large DEX’s such as Pancake Swap, Uniswap, 1inch.Multibridge Support that allows users to swap, trade and farm on to any chain. AI Swap Chat (BETA) that will allow you to swap any coin by telling Roswell AI what you need swapped.Looking ahead, Roswell AI DEX is committed to continuing its mission of providing users with a fast, reliable, and affordable way to trade cryptocurrencies. With its advanced technology stack powered by artificial intelligence algorithms combined with strategic partnerships in place it is poised for success in coming years.",
    },
    {
      title: "Looking ahead...",
      desc: "Roswell AI DEX is committed to continuing its mission of providing users with a fast, reliable, and affordable way to trade cryptocurrencies. With its advanced technology stack powered by artificial intelligence algorithms combined with strategic partnerships in place it is poised for success in coming years.",
    },
  ];  
    


  return (
    <section className='w-full flex items-center flex-col'>
      <h2 className='text-purple font-bold text-[30px] lg:text-[50px] lg:my-[30px] press-font '>
        Roadmap
      </h2>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='main-timeline'>
              {roadmap.map(({ title, desc }, i) => (
                <div key={i} className='timeline'>
                  <div className='timeline-content'>
                    <div className='circle flex items-center justify-center'>
                      <p className='font-bold text-white text-[30px] press-font'>
                        {i + 1}
                      </p>
                    </div>
                    <div className='content'>
                      <span className='year font-bold  press-font'>
                        {title}
                      </span>
                      {/* <h3 className="title h4">{title}</h3> */}
                      <p className='description mt-[30px] '>{desc}</p>
                      <div className='icon'>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
