import React from 'react';
import { MapPin, ArrowRight, Coffee } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Moody Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop" 
          alt="Coffee Shop Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-kahwa-black/70 via-kahwa-dark/50 to-kahwa-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <div className="inline-flex items-center gap-2 text-kahwa-yellow mb-8 tracking-[0.2em] uppercase text-xs font-bold bg-kahwa-black/40 px-6 py-2 rounded-full backdrop-blur-md border border-white/10 shadow-lg animate-fade-in">
          <MapPin size={14} />
          <span>Now Brewing in Fort Worth, TX</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-xl">
          <span className="block text-2xl md:text-3xl font-sans font-light tracking-widest mb-2 opacity-90">The Art of</span>
          Roasted Perfection
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed font-serif italic">
          "Where every cup tells a story of passion, precision, and the perfect bean."
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="bg-kahwa-yellow text-kahwa-black px-10 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-kahwa-yellow/50 flex items-center gap-3">
            <Coffee size={20} />
            Order Ahead
          </button>
          <button className="border border-white text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 group backdrop-blur-sm">
            Explore Menu <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;