import React from 'react';
import { MENU_HIGHLIGHTS } from '../constants';

const MenuSection: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-kahwa-yellow font-bold uppercase tracking-widest text-sm">Taste the Difference</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-kahwa-black mt-3">Menu Highlights</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            From our signature blends to locally sourced pastries, everything is prepared with care and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MENU_HIGHLIGHTS.map((item) => (
            <div key={item.id} className="group">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <button className="w-full bg-kahwa-yellow text-kahwa-black py-3 rounded-sm font-bold uppercase text-xs tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Add to Order
                  </button>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif font-bold text-xl text-kahwa-black">{item.name}</h3>
                  <span className="font-medium text-kahwa-yellow">{item.price}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="border-2 border-kahwa-black text-kahwa-black px-10 py-3 rounded-sm font-bold uppercase tracking-widest hover:bg-kahwa-black hover:text-white transition-colors">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;