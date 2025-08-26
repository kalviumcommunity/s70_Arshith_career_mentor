function generateDynamicPrompt({ name, skills, interests, preferredIndustry, experienceLevel }) {
  return `
You are an AI-powered career mentor.

User Details:
- Name: ${name || "Not provided"}
- Skills: ${skills && skills.length ? skills.join(', ') : "Not provided"}
- Interests: ${interests && interests.length ? interests.join(', ') : "Not provided"}
- Preferred Industry: ${preferredIndustry || "Open to suggestions"}
- Experience Level: ${experienceLevel || "Beginner"}

Task:
Based on this information, suggest 3 career paths. For each suggestion, include:
1. Job Title  
2. One-line explanation why it matches the user  
3. One skill they should improve to succeed in that field  

Respond in a clean bullet-point format. Avoid introductory or closing remarks.
`;
}

module.exports = generateDynamicPrompt;
