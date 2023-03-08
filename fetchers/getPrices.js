import axios  from 'axios';
 
 export const fetchPrices = async (amount, one, two, decimals)=>{
    //http://localhost:3000/api/tokenPrice
      const res = await axios.get(
        // `https://www.roswelldex.ai/api/tokenPrice`
        `http://localhost:3000/api/tokenPrice`
        , {
        params: {addressOne: one, addressTwo: two, amount: Number(amount * 10 ** decimals)  }
      }, { method: "GET" })
  
      const priceData = res.data
      console.log(priceData)
      return priceData 
      
  }