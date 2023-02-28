import Moralis from "moralis";


// Initialize the cors middleware
// const cors = Cors({
//   methods: ["GET", "HEAD"],
// });

export default async function handler(req, res) {
  // await cors(req, res);

  const { query , method } = req;

  switch (method) {
    
    case "GET":
     

      try {
        // Run cors middleware
 

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

      } catch (err) {
        console.log(err)
      }
      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} not supported`);
  }

}

const startServer = async () => {
    await Moralis.start({
      apiKey: process.env.MORALIS_API_KEY,
    }) 
  }
  
  // Call startServer()
  startServer()
