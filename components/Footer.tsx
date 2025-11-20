import React from 'react';
import { Instagram, Facebook, Twitter, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-kahwa-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-gray-800 pb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Coffee className="text-kahwa-yellow" />
              <span className="text-2xl font-serif font-bold tracking-wider">KAHWA</span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed mb-6">
              Since 2006, Kahwa has been roasting small-batch coffee with 100% Arabica beans. 
              Our passion for quality and community drives everything we do.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-kahwa-yellow transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-kahwa-yellow transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-kahwa-yellow transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-kahwa-yellow font-bold uppercase tracking-widest mb-6 text-sm">Explore</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Shop Coffee</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Subscriptions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wholesale</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Locations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-kahwa-yellow font-bold uppercase tracking-widest mb-6 text-sm">Legal</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Kahwa Coffee Roasting Company. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for the Future.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;