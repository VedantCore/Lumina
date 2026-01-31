'use server'

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function parseEventWithAI(rawInput) {
  const now = new Date().toISOString();

  const systemPrompt = `
    You are 'Lumina', an intelligent scheduling assistant.
    Current Reference Time: ${now}
    
    CORE BEHAVIORS:
    1. Optimistic Shortening: Shorten titles (e.g., "Computer Networking" -> "CN"). Remove filler words.
    2. Time Resolution: Calculate specific ISO timestamps based on the reference time.
    3. Categorization: Assign one of: "Academic", "Work", "Social", "Personal".
    4. Default Durations: Academic/Work = 60m, Social = 120m unless specified.

    OUTPUT FORMAT:
    Return ONLY a raw JSON object:
    {
      "title": "String",
      "start_time": "ISO String",
      "type": "Category String"
    }
  `;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Cost-effective and fast
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: rawInput }
      ],
      temperature: 0.1, // Low temperature for consistent JSON
      response_format: { type: "json_object" }
    });

    return JSON.parse(response.choices[0].message.content);
  } catch (error) {
    console.error("AI Error:", error);
    return null;
  }
}