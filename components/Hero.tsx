import React from 'react';
import { MapPin, ArrowRight, Coffee, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Slow Zoom and Moody Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop" 
          alt="Coffee Shop Interior" 
          className="w-full h-full object-cover animate-zoom-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-kahwa-black/60 via-kahwa-dark/40 to-kahwa-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto mt-10">
        <div className="inline-flex items-center gap-2 text-kahwa-yellow mb-6 tracking-[0.25em] uppercase text-[10px] md:text-xs font-bold bg-kahwa-black/60 px-6 py-2 rounded-full backdrop-blur-md border border-white/5 shadow-xl animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
          <MapPin size={12} />
          <span>Fort Worth, TX • Open Daily 6:30 AM</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold text-white mb-6 leading-none drop-shadow-2xl animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
          <span className="block text-xl md:text-3xl font-sans font-light tracking-[0.3em] mb-4 text-kahwa-tan uppercase">Crafting</span>
          Liquid Gold
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed font-serif italic animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
          "A symphony of flavor in every pour, roasted to perfection in the heart of Texas."
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in opacity-0" style={{ animationDelay: '0.7s' }}>
          <button className="bg-kahwa-yellow text-kahwa-black px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-kahwa-yellow/50 flex items-center gap-3 text-sm">
            <Coffee size={18} />
            Order Ahead
          </button>
          <button className="border border-white/30 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center gap-2 group backdrop-blur-sm text-sm">
            Explore Menu <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;