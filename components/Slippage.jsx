import React from 'react'

function Slippage({slippage, handleSlippageChange}) {

    const slippages = [
        {
            value: 0.5,
            procentage:"0.5%"
        },
        {
            value: 2.5,
            procentage:"2.5%"
        },
        {
            value: 5,
            procentage:"5.0%"
        }
    ]
  return (
    <div className="text-white mt-5">
        {
            slippages.map(({value, procentage}, i)=>(
                <label key={i} className={`${value === slippage ? "border-2 border-purple rounded-full": "" }  font-bold px-4 py-2`} >
                <input 
                  type="radio" 
                  value={value} 
                  checked={value === slippage} 
                  onChange={handleSlippageChange} 
                  className="appearance-none"
                />
                {procentage}
              </label>
            ))
        }
            
    </div>
  )
}

export default Slippage