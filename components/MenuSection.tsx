import React from 'react';
import { MENU_HIGHLIGHTS } from '../constants';
import { Sparkles, Star } from 'lucide-react';

const MenuSection: React.FC = () => {
  return (
    <section id="menu" className="py-32 relative overflow-hidden bg-[#F9F8F4]">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-kahwa-black/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-4 animate-float">
            <Sparkles className="text-kahwa-yellow h-6 w-6" />
          </div>
          <span className="text-kahwa-dark/60 font-bold uppercase tracking-[0.3em] text-xs">Curated Selection</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-kahwa-black mt-4 mb-6">Signature Brews</h2>
          <div className="h-0.5 w-20 bg-kahwa-yellow mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-serif italic">
            Expertly roasted beans meets artisanal preparation. Experience the difference in every cup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MENU_HIGHLIGHTS.map((item, idx) => (
            <div 
              key={item.id} 
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kahwa-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-kahwa-black px-3 py-1 rounded-full text-sm font-bold font-serif shadow-md">
                  {item.price}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                   <button className="w-full bg-kahwa-yellow text-kahwa-black py-3 rounded-sm font-bold uppercase text-xs tracking-widest hover:bg-white transition-colors shadow-lg opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2">
                    <Star size={12} fill="currentColor" /> Order Now
                  </button>
                </div>
              </div>
              
              <div className="p-6 text-center bg-white relative z-10">
                <h3 className="font-serif font-bold text-xl text-kahwa-black mb-2 group-hover:text-kahwa-yellow transition-colors">{item.name}</h3>
                <div className="w-8 h-0.5 bg-gray-100 mx-auto mb-3"></div>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="#" className="inline-block border border-kahwa-dark text-kahwa-dark px-10 py-3 rounded-sm font-bold uppercase tracking-widest hover:bg-kahwa-dark hover:text-kahwa-yellow transition-all duration-300 text-xs">
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;