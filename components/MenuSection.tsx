import React from 'react';
import { MENU_HIGHLIGHTS } from '../constants';
import { Sparkles } from 'lucide-react';

const MenuSection: React.FC = () => {
  return (
    <section id="menu" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-kahwa-cream to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-4">
            <Sparkles className="text-kahwa-yellow h-6 w-6" />
          </div>
          <span className="text-kahwa-yellow font-bold uppercase tracking-[0.3em] text-xs">Curated Selection</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-kahwa-black mt-4 mb-6">Our Favorites</h2>
          <div className="h-1 w-20 bg-kahwa-yellow mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-serif italic">
            Hand-picked selections from our master roasters and pastry chefs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {MENU_HIGHLIGHTS.map((item) => (
            <div key={item.id} className="group bg-white rounded-t-[2rem] rounded-b-md shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative overflow-hidden rounded-t-[2rem] aspect-[4/5]">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kahwa-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                   <button className="w-full bg-white/90 backdrop-blur text-kahwa-black py-3 rounded-sm font-bold uppercase text-xs tracking-widest hover:bg-kahwa-yellow transition-colors shadow-lg opacity-0 group-hover:opacity-100">
                    Add to Order
                  </button>
                </div>
              </div>
              
              <div className="p-6 text-center relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-kahwa-black text-kahwa-yellow px-4 py-1 rounded-full text-sm font-bold font-serif shadow-lg">
                  {item.price}
                </div>
                <h3 className="font-serif font-bold text-2xl text-kahwa-black mb-3 mt-4">{item.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light border-t border-gray-100 pt-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="#" className="inline-block border-b-2 border-kahwa-black text-kahwa-black pb-1 font-bold uppercase tracking-widest hover:text-kahwa-yellow hover:border-kahwa-yellow transition-colors text-sm">
            View Full Menu PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;