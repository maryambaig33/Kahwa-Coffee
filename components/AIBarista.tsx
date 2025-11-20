import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Coffee } from 'lucide-react';
import { Chat } from '@google/genai';
import { createBaristaChat, sendMessageToBarista } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIBarista: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Good day! I'm your Kahwa virtual barista. How can I help you wake up today?" }
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
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble hearing you over the espresso machine. Could you try again?", isError: true }]);
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
        className={`fixed bottom-8 right-8 z-50 p-5 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-110 flex items-center justify-center group
          ${isOpen ? 'bg-kahwa-dark rotate-90' : 'bg-kahwa-black hover:bg-kahwa-dark'}
        `}
      >
        {isOpen ? (
          <X className="text-white" />
        ) : (
          <div className="relative">
            <MessageCircle className="text-kahwa-yellow h-8 w-8" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-kahwa-yellow opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-kahwa-yellow"></span>
            </span>
          </div>
        )}
      </button>

      {/* Chat Interface */}
      <div
        className={`fixed bottom-28 right-8 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 origin-bottom-right border border-gray-100 flex flex-col
        ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10 pointer-events-none'}
        `}
        style={{ maxHeight: '600px' }}
      >
        {/* Header */}
        <div className="bg-kahwa-black p-5 flex items-center justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-kahwa-yellow rounded-full opacity-20"></div>
          <div className="flex items-center gap-4 relative z-10">
            <div className="bg-kahwa-yellow/20 p-2 rounded-full border border-kahwa-yellow/50">
              <Coffee size={20} className="text-kahwa-yellow" />
            </div>
            <div>
              <h3 className="text-white font-bold font-serif text-lg">Barista Bot</h3>
              <p className="text-kahwa-yellow/80 text-xs uppercase tracking-wider">Always Open</p>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-5 bg-[#F9F8F4] space-y-6 min-h-[350px]">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-end gap-2`}>
                 {msg.role === 'model' && (
                   <div className="w-6 h-6 rounded-full bg-kahwa-dark flex items-center justify-center shrink-0 mb-1">
                     <Sparkles size={12} className="text-kahwa-yellow" />
                   </div>
                 )}
                
                <div
                  className={`p-4 text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-kahwa-black text-white rounded-2xl rounded-br-none'
                      : 'bg-white border border-gray-200 text-gray-800 rounded-2xl rounded-bl-none'
                  } ${msg.isError ? 'bg-red-50 text-red-600 border-red-200' : ''}`}
                >
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
               <div className="flex items-end gap-2">
                 <div className="w-6 h-6 rounded-full bg-kahwa-dark flex items-center justify-center shrink-0 mb-1">
                     <Sparkles size={12} className="text-kahwa-yellow" />
                   </div>
                  <div className="bg-white border border-gray-200 p-4 rounded-2xl rounded-bl-none shadow-sm">
                    <div className="flex space-x-1.5">
                      <div className="w-1.5 h-1.5 bg-kahwa-dark rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-kahwa-dark rounded-full animate-bounce delay-100"></div>
                      <div className="w-1.5 h-1.5 bg-kahwa-dark rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-center gap-2 bg-gray-50 px-4 py-3 rounded-xl focus-within:ring-1 focus-within:ring-kahwa-black transition-all border border-gray-200">
            <input
              type="text"
              placeholder="Ask about our roasts..."
              className="flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !inputValue.trim()}
              className="text-kahwa-dark hover:text-kahwa-yellow disabled:opacity-30 transition-colors transform hover:scale-110 active:scale-95"
            >
              <Send size={18} />
            </button>
          </div>
          <div className="text-center mt-2">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest">Powered by Gemini AI</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIBarista;