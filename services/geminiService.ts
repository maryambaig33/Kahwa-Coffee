import { GoogleGenAI, Chat } from "@google/genai";
import { MENU_HIGHLIGHTS, STORE_INFO } from "../constants";

// Initialize the client.
// Note: In a real production app, ensure API_KEY is secured via backend proxy or strict CORS/restrictions.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are "Barista Bot", a friendly and knowledgeable virtual barista for Kahwa Coffee in Fort Worth, Texas.
Your goal is to help customers decide what to order, answer questions about the store, and provide a warm, coffee-shop atmosphere.

Store Info:
Address: ${STORE_INFO.address}, ${STORE_INFO.city}, ${STORE_INFO.state}
Hours: ${JSON.stringify(STORE_INFO.hours)}

Menu Highlights:
${MENU_HIGHLIGHTS.map(item => `- ${item.name} (${item.price}): ${item.description}`).join('\n')}

Guidelines:
1. Be concise and friendly.
2. If asked about items not on the highlights list, explain you can recommend general coffee drinks like Cappuccinos, Espressos, or drip coffee which we definitely serve.
3. If asked about location, use the provided address.
4. Suggest specific drinks based on the user's mood (e.g., if they want energy -> Cold Brew; if they want cozy -> Lavender Latte).
5. Do not make up prices that aren't listed.
6. Keep responses under 3 sentences unless asked for a detailed explanation.
`;

export const createBaristaChat = (): Chat => {
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7, // Slightly creative but grounded
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