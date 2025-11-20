import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Coffee, AlertCircle } from 'lucide-react';
import { Chat } from '@google/genai';
import { createBaristaChat, sendMessageToBarista } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIBarista: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Welcome to Kahwa! I'm your virtual barista. Need a recommendation or have questions about our roasts?" }
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
      try {
        chatSession.current = createBaristaChat();
      } catch (e) {
        console.error("Failed to init chat", e);
      }
    }
    setIsOpen(!isOpen);
  };

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    // Ensure session exists
    if (!chatSession.current) {
        chatSession.current = createBaristaChat();
    }

    const userMsg = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const responseText = await sendMessageToBarista(chatSession.current, userMsg);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "I'm having a little trouble connecting to the roastery (Network Error). Please try again in a moment!", isError: true }]);
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
        className={`fixed bottom-8 right-8 z-50 p-4 md:p-5 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-105 flex items-center justify-center group border-2 border-white/10
          ${isOpen ? 'bg-kahwa-dark rotate-90' : 'bg-kahwa-black hover:bg-kahwa-dark'}
        `}
      >
        {isOpen ? (
          <X className="text-white" />
        ) : (
          <div className="relative">
            <Coffee className="text-kahwa-yellow h-6 w-6 md:h-8 md:w-8" />
            <span className="absolute -top-2 -right-2 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-kahwa-yellow opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-kahwa-yellow border-2 border-kahwa-black"></span>
            </span>
          </div>
        )}
      </button>

      {/* Chat Interface */}
      <div
        className={`fixed bottom-24 right-4 md:right-8 z-50 w-[90vw] md:w-96 bg-[#F9F8F4] rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 origin-bottom-right border border-kahwa-dark/10 flex flex-col
        ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10 pointer-events-none'}
        `}
        style={{ maxHeight: '600px', height: '70vh' }}
      >
        {/* Header */}
        <div className="bg-kahwa-black p-4 md:p-5 flex items-center justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-kahwa-yellow rounded-full opacity-10 blur-xl"></div>
          <div className="flex items-center gap-3 relative z-10">
            <div className="bg-white/10 p-2 rounded-full border border-white/10 backdrop-blur-sm">
              <Sparkles size={18} className="text-kahwa-yellow" />
            </div>
            <div>
              <h3 className="text-white font-bold font-serif text-lg tracking-wide">Kahwa Concierge</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                <p className="text-gray-400 text-[10px] uppercase tracking-widest">Online</p>
              </div>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-paper-pattern">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
            >
              <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-end gap-2`}>
                 {msg.role === 'model' && (
                   <div className="w-8 h-8 rounded-full bg-kahwa-dark flex items-center justify-center shrink-0 mb-1 shadow-md text-kahwa-yellow border border-kahwa-yellow/20">
                     {msg.isError ? <AlertCircle size={14} /> : <Coffee size={14} />}
                   </div>
                 )}
                
                <div
                  className={`p-3.5 text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-kahwa-dark text-white rounded-2xl rounded-br-none font-light'
                      : 'bg-white border border-gray-100 text-gray-800 rounded-2xl rounded-bl-none'
                  } ${msg.isError ? 'bg-red-50 text-red-800 border-red-100' : ''}`}
                >
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start animate-fade-in">
               <div className="flex items-end gap-2">
                 <div className="w-8 h-8 rounded-full bg-kahwa-dark flex items-center justify-center shrink-0 mb-1 shadow-md">
                     <Coffee size={14} className="text-kahwa-yellow animate-pulse" />
                   </div>
                  <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-bl-none shadow-sm">
                    <div className="flex space-x-1.5 items-center h-4">
                      <div className="w-1.5 h-1.5 bg-kahwa-brown/40 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-kahwa-brown/60 rounded-full animate-bounce delay-100"></div>
                      <div className="w-1.5 h-1.5 bg-kahwa-brown/80 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-center gap-2 bg-[#F9F8F4] px-4 py-2.5 rounded-full focus-within:ring-1 focus-within:ring-kahwa-yellow transition-all border border-gray-200 shadow-inner">
            <input
              type="text"
              placeholder="Ask about our cold brew..."
              className="flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400 font-light"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !inputValue.trim()}
              className="text-kahwa-black hover:text-kahwa-yellow disabled:opacity-30 transition-colors transform hover:scale-110 active:scale-95 p-1"
            >
              <Send size={18} />
            </button>
          </div>
          <div className="text-center mt-2">
            <span className="text-[9px] text-gray-300 uppercase tracking-widest font-medium">Powered by Gemini AI</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIBarista;