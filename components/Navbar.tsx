import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee, ShoppingBag } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-kahwa-dark/95 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-kahwa-yellow p-2 rounded-full">
            <Coffee className="h-6 w-6 text-kahwa-black" />
          </div>
          <span className={`text-2xl font-serif font-bold tracking-wider ${isScrolled ? 'text-white' : 'text-white'}`}>
            KAHWA
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {['Menu', 'Locations', 'Wholesale', 'Our Story'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white/90 hover:text-kahwa-yellow transition-colors font-medium text-sm uppercase tracking-widest">
              {item}
            </a>
          ))}
          <button className="bg-kahwa-yellow text-kahwa-black px-6 py-2 rounded-sm font-bold text-sm uppercase hover:bg-white transition-colors flex items-center gap-2">
            <ShoppingBag size={16} />
            Order Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-kahwa-dark border-t border-white/10 shadow-xl py-4 px-4 flex flex-col space-y-4">
          {['Menu', 'Locations', 'Wholesale', 'Our Story'].map((item) => (
            <a key={item} href="#" className="text-white hover:text-kahwa-yellow py-2 border-b border-white/5">
              {item}
            </a>
          ))}
          <button className="bg-kahwa-yellow text-kahwa-black w-full py-3 rounded-sm font-bold uppercase">
            Order Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;