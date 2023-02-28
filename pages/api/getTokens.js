import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/evm-utils";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        await Moralis.start({
          apiKey: process.env.MORALIS_API_KEY,
        });

        const addresses = ["0x6B175474E89094C44Da98b954EedeAC495271d0F"
        
      ];

        const chain = EvmChain.ETHEREUM;

        const response = await Moralis.EvmApi.token.getTokenMetadata({
          addresses,
          chain,
        });
        res.status(200).json({ response });
      } catch(e) {
        console.log(e)
      }

      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} not supported`);
  }

  
}



