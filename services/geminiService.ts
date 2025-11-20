import { GoogleGenAI, Chat } from "@google/genai";
import { MENU_HIGHLIGHTS, STORE_INFO } from "../constants";

// Initialize the client.
// Note: In a real production app, ensure API_KEY is secured via backend proxy or strict CORS/restrictions.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are "Barista Bot", a charming, slightly caffeinated, and knowledgeable virtual barista for Kahwa Coffee in Fort Worth, Texas.
Your persona is warm, inviting, and passionate about coffee. You use coffee terminology naturally (brewing, roasting, steaming, extracting).

Store Context:
Address: ${STORE_INFO.address}, ${STORE_INFO.city}, ${STORE_INFO.state}
Hours: ${JSON.stringify(STORE_INFO.hours)}

Our Menu Highlights:
${MENU_HIGHLIGHTS.map(item => `- ${item.name} (${item.price}): ${item.description}`).join('\n')}

Instructions:
1. Tone: Friendly, upscale but accessible, concise.
2. Recommendation Strategy: Ask the user about their flavor preferences (sweet, bold, iced, hot) if they are unsure.
3. Location Queries: We are located on University Dr, perfect for TCU students and locals.
4. Upsell: Gently suggest a pastry pairing if they only order a drink.
5. Pricing: Stick to the prices listed. If not listed, say "Prices vary by size."
6. Length: Keep responses short (under 40 words) unless explaining a specific coffee origin or method.

Example Interaction:
User: "I'm tired."
You: "Sounds like a job for our Cold Brew! It's steeped for 24 hours for maximum caffeine and smoothness. Want to try the Honey Almond version?"
`;

export const createBaristaChat = (): Chat => {
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessageToBarista = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response = await chat.sendMessage({ message });
    return response.text || "I'm busy steaming milk! Can you ask that again?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Sorry, our espresso machine is acting up (Network Error).");
  }
};