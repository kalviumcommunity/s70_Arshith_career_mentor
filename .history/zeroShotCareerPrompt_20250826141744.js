const { OpenAI } = require('openai'); // install openai package if not already
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function getCareerSuggestions(userInput) {
  const prompt = `
You are a smart and friendly career mentor. When a user types in their interests or skills, instantly suggest 3 suitable career options. 
For each suggestion, give a job title and a one-line reason why it matches the user’s input. 
Do not add greetings or extra explanation.

User input: ${userInput}
`;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 200,
    temperature: 0.7,
  });

  return response.choices[0].message.content.trim();
}

module.exports = getCareerSuggestions;
