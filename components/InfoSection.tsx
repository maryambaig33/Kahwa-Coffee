import React from 'react';
import { Clock, Phone, Navigation } from 'lucide-react';
import { STORE_INFO } from '../constants';

const InfoSection: React.FC = () => {
  return (
    <section className="py-20 bg-kahwa-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Info Cards */}
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-bold text-kahwa-black mb-8">
              Visit Us in Fort Worth
            </h2>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="bg-kahwa-yellow/10 p-3 rounded-lg text-kahwa-dark">
                <Navigation size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">Location</h3>
                <p className="text-gray-600">{STORE_INFO.address}</p>
                <p className="text-gray-600">{STORE_INFO.city}, {STORE_INFO.state} {STORE_INFO.zip}</p>
                <a href="#" className="inline-block mt-3 text-kahwa-yellow font-bold text-sm uppercase tracking-wider hover:underline">Get Directions</a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="bg-kahwa-yellow/10 p-3 rounded-lg text-kahwa-dark">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">Hours</h3>
                <ul className="space-y-1">
                  {Object.entries(STORE_INFO.hours).map(([days, hours]) => (
                    <li key={days} className="flex justify-between w-full gap-8 text-gray-600 text-sm">
                      <span className="font-medium">{days}</span>
                      <span>{hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="bg-kahwa-yellow/10 p-3 rounded-lg text-kahwa-dark">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">Contact</h3>
                <p className="text-gray-600">{STORE_INFO.phone}</p>
                <p className="text-gray-600 text-sm mt-1">Managers: Available for catering inquiries</p>
              </div>
            </div>
          </div>

          {/* Right: Static Map Image / Visual */}
          <div className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl relative group">
            {/* Using a placeholder map image for visual purposes */}
            <img 
              src="https://picsum.photos/id/395/800/1000" 
              alt="Store Context" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-lg">
              <p className="font-serif text-xl italic text-gray-800">"The best spot near TCU for studying or catching up with friends."</p>
              <p className="mt-2 text-sm font-bold text-kahwa-yellow uppercase">— Fort Worth Weekly</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoSection;