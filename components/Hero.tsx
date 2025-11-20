import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/429/1920/1080" 
          alt="Coffee Shop Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-kahwa-dark"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <div className="inline-flex items-center gap-2 text-kahwa-yellow mb-6 tracking-widest uppercase text-xs font-bold bg-black/30 px-4 py-1 rounded-full backdrop-blur-md border border-white/10">
          <MapPin size={14} />
          <span>Now Open in Fort Worth, TX</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          Your Daily Ritual,<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-kahwa-yellow to-yellow-200">Elevated.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Experience the legendary roast of Kahwa Coffee right here on University Dr. 
          Small batch roasted, meticulously brewed.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-kahwa-yellow text-kahwa-black px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 transform hover:-translate-y-1">
            Order for Pickup
          </button>
          <button className="border border-white text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 group">
            View Menu <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;