
import axios from "axios";

export default async function handler(req, res) {
  
  const { query, method } = req;
  
  switch (method) {
    case "GET":
      

      console.log(query);

        // Run cors middleware
          

          
        const response = await  axios.get(
            `https://pathfinder.1inch.io/v1.4/chain/42161/router/v5/quotes?fromTokenAddress=${query.addressOne}&toTokenAddress=${query.addressTwo}&amount=1&gasPrice=100000000&protocolWhiteList=ARBITRUM_BALANCER_V2,ARBITRUM_ONE_INCH_LIMIT_ORDER,ARBITRUM_ONE_INCH_LIMIT_ORDER_V2,ARBITRUM_ONE_INCH_LIMIT_ORDER_V3,ARBITRUM_DODO,ARBITRUM_DODO_V2,ARBITRUM_SUSHISWAP,ARBITRUM_DXSWAP,ARBITRUM_UNISWAP_V3,ARBITRUM_CURVE,ARBITRUM_CURVE_V2,ARBITRUM_GMX,ARBITRUM_SYNAPSE,ARBITRUM_PMM5,ARBITRUM_SADDLE,ARBITRUM_KYBERSWAP_ELASTIC,ARBITRUM_KYBER_DMM_STATIC,ARBITRUM_AAVE_V3,ARBITRUM_ELK,ARBITRUM_WOOFI_V2,ARBITRUM_CAMELOT,ARBITRUM_TRADERJOE,ARBITRUM_TRADERJOE_V2,ARBITRUM_SWAPFISH,ARBITRUM_PMM6,ARBITRUM_ZYBER,ARBITRUM_ZYBER_STABLE,ARBITRUM_SOLIDLIZARD,ARBITRUM_ZYBER_V3&preset=maxReturnResult`,
          )
          

            const price = response.data.bestResult.toTokenAmount;
              const ratio = 1 / price;
          res.status(200)
          .json({
            ratio
          });
        
      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} not supported`);
  }
}
