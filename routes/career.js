const express = require('express');
const router = express.Router();
const getCareerSuggestions = require('../zeroShotCareerPrompt');

router.post('/suggest-careers', async (req, res) => {
  try {
    const { input } = req.body;
    const result = await getCareerSuggestions(input);
    res.status(200).json({ suggestions: result });
  } catch (error) {
    console.error("Error generating suggestions:", error);
    res.status(500).json({ error: "Something went wrong." });
  }
});

module.exports = router;
