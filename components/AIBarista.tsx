import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Coffee } from 'lucide-react';
import { Chat } from '@google/genai';
import { createBaristaChat, sendMessageToBarista } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIBarista: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm your virtual barista. Ask me about our Fort Worth specials or what coffee suits your mood today!" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSession = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleOpen = () => {
    if (!isOpen && !chatSession.current) {
      chatSession.current = createBaristaChat();
    }
    setIsOpen(!isOpen);
  };

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading || !chatSession.current) return;

    const userMsg = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const responseText = await sendMessageToBarista(chatSession.current, userMsg);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Oops, I spilled the coffee! Please try again.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={handleOpen}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center
          ${isOpen ? 'bg-kahwa-dark rotate-90' : 'bg-kahwa-yellow hover:bg-yellow-400'}
        `}
      >
        {isOpen ? <X className="text-white" /> : <MessageCircle className="text-kahwa-black h-8 w-8" />}
      </button>

      {/* Chat Interface */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right border border-gray-100
        ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'}
        `}
      >
        {/* Header */}
        <div className="bg-kahwa-black p-4 flex items-center gap-3">
          <div className="bg-kahwa-yellow p-1.5 rounded-full">
            <Sparkles size={18} className="text-kahwa-black" />
          </div>
          <div>
            <h3 className="text-white font-bold font-serif">Virtual Barista</h3>
            <p className="text-gray-400 text-xs">Powered by Gemini 2.5</p>
          </div>
        </div>

        {/* Messages Area */}
        <div className="h-80 overflow-y-auto p-4 bg-gray-50 space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-kahwa-black text-white rounded-tr-none'
                    : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm'
                } ${msg.isError ? 'bg-red-50 text-red-600 border-red-200' : ''}`}
              >
                {msg.role === 'model' && (
                  <div className="flex items-center gap-1 mb-1 opacity-50">
                    <Coffee size={12} />
                    <span className="text-[10px] font-bold uppercase">Kahwa AI</span>
                  </div>
                )}
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 p-3 rounded-xl rounded-tl-none shadow-sm">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full focus-within:ring-2 focus-within:ring-kahwa-yellow transition-all">
            <input
              type="text"
              placeholder="Suggest a drink..."
              className="flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-500"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !inputValue.trim()}
              className="text-kahwa-dark hover:text-kahwa-yellow disabled:opacity-30 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIBarista;