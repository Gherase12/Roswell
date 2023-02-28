import Moralis from "moralis";
import Cors from "cors";

// Initialize the cors middleware


export default async function handler(req, res) {
  // Run cors middleware
  

  const { query } = req;

  const responseOne = await Moralis.EvmApi.token.getTokenPrice({
    address: query.addressOne,
  });

  const responseTwo = await Moralis.EvmApi.token.getTokenPrice({
    address: query.addressTwo,
  });

  const usdPrices = {
    tokenOne: responseOne.raw.usdPrice,
    tokenTwo: responseTwo.raw.usdPrice,
    ratio: responseOne.raw.usdPrice / responseTwo.raw.usdPrice,
  };

  return res.status(200).json(usdPrices);
}

const startServer = async () => {
    await Moralis.start({
      apiKey: process.env.MORALIS_API_KEY,
    }) 
  }
  
  // Call startServer()
  startServer()
