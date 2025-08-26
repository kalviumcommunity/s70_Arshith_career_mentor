const express = require('express');
const router = express.Router();
const generateDynamicPrompt = require('../utils/generateDynamicPrompt');
const { OpenAI } = require('openai');
require('dotenv').config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post('/dynamic-career-suggestions', async (req, res) => {
  try {
    const userData = req.body;
    const prompt = generateDynamicPrompt(userData);

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 300,
      temperature: 0.7,
    });

    const reply = response.choices[0].message.content.trim();
    res.status(200).json({ suggestions: reply });
  } catch (error) {
    console.error('Dynamic Prompt Error:', error.message);
    res.status(500).json({ error: 'Failed to generate dynamic career suggestions' });
  }
});

module.exports = router;
