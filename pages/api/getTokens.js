import axios from "axios";

export default async function handler(req, res) {
  const { query, method } = req;

  switch (method) {
    case "GET":
      try {
        axios
          .get("https://api.1inch.io/v5.0/42161/tokens")
          .then((response) => {
            // const usdPrices = response.data;
            return res.status(200).json(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} not supported`);
  }
}
