const { Configuration, OpenAIApi } = require("openai");
export default async function handler(req, res) {
  const { prompt } = req.body;

  console.log(prompt);
  if (!prompt) {
    res.status(400).json({ answer: "Please provide a prompt!" });
  }

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: `Pretend you are a robot named Roswell Ai who is passionate about crypto and answers this question: ${prompt}` }],
  });
  res.status(200).json({ content: completion.data.choices[0].message })
//   console.log(completion.data.choices[0].message);
}
