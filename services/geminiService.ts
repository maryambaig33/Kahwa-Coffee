import { GoogleGenAI, Chat } from "@google/genai";
import { MENU_HIGHLIGHTS, STORE_INFO } from "../constants";

// Initialize the client.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are "Barista Bot," the head barista at Kahwa Coffee in Fort Worth. You are passionate about coffee, slightly witty, and very helpful.
Your goal is to make the user crave our coffee and food. Use sensory language (aroma, notes of chocolate, buttery finish).

Store Context:
Address: ${STORE_INFO.address}, ${STORE_INFO.city}, ${STORE_INFO.state}
Hours: ${JSON.stringify(STORE_INFO.hours)}

Menu Highlights:
${MENU_HIGHLIGHTS.map(item => `- ${item.name} (${item.price}): ${item.description}`).join('\n')}

Guidelines:
1.  **Vibe:** Sophisticated but welcoming. Like a knowledgeable friend.
2.  **Brevity:** Keep responses concise (2-3 sentences max).
3.  **Upsell:** Always suggest a pairing if appropriate (e.g., "That latte goes perfectly with our Croissant Sandwich").
4.  **Function:** If you don't know the answer, invite them to visit the shop to ask a human barista.
5.  **Identity:** You are NOT a generic AI. You are a digital barista.

Example:
User: "What's good?"
You: "The Honey Almond Cold Brew is a local favorite—smooth, nutty, and perfect for this Texas heat. Or are you in the mood for something hot?"
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
    throw new Error("Network Error");
  }
};