import React from 'react';
import { Clock, Phone, Navigation, Map } from 'lucide-react';
import { STORE_INFO } from '../constants';

const InfoSection: React.FC = () => {
  return (
    <section className="py-24 bg-kahwa-cream relative border-b border-kahwa-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Info Cards */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-center">
            <div>
              <span className="text-kahwa-yellow font-bold uppercase tracking-widest text-sm">Visit Us</span>
              <h2 className="text-4xl font-serif font-bold text-kahwa-black mt-2 mb-8">
                In the Heart of<br/>Fort Worth
              </h2>
            </div>
            
            <div className="bg-white p-8 rounded-none border-l-4 border-kahwa-yellow shadow-sm hover:shadow-md transition-all group">
              <div className="flex items-start gap-4">
                <div className="bg-kahwa-cream p-3 rounded-full text-kahwa-dark group-hover:bg-kahwa-black group-hover:text-kahwa-yellow transition-colors">
                  <Navigation size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-kahwa-black mb-2">Our Location</h3>
                  <p className="text-gray-600 leading-relaxed">{STORE_INFO.address}</p>
                  <p className="text-gray-600 leading-relaxed">{STORE_INFO.city}, {STORE_INFO.state} {STORE_INFO.zip}</p>
                  <a href="#" className="inline-flex items-center gap-2 mt-4 text-kahwa-dark font-bold text-sm uppercase tracking-wider hover:text-kahwa-yellow transition-colors border-b border-transparent hover:border-kahwa-yellow">
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-kahwa-black text-white p-8 rounded-none shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Clock size={100} />
              </div>
              <div className="relative z-10">
                <h3 className="font-serif font-bold text-xl text-kahwa-yellow mb-6 flex items-center gap-3">
                  <Clock size={20} /> Opening Hours
                </h3>
                <ul className="space-y-3">
                  {Object.entries(STORE_INFO.hours).map(([days, hours]) => (
                    <li key={days} className="flex justify-between w-full gap-8 text-gray-300 text-sm border-b border-white/10 pb-2 last:border-0">
                      <span className="font-medium uppercase tracking-wider text-xs">{days}</span>
                      <span className="font-mono">{hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-4 px-8">
               <Phone size={20} className="text-kahwa-black" />
               <p className="text-lg font-serif text-kahwa-dark">{STORE_INFO.phone}</p>
            </div>
          </div>

          {/* Right: Static Map Image / Visual */}
          <div className="lg:col-span-7 h-full min-h-[500px] relative group rounded-lg overflow-hidden">
             <img 
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2574&auto=format&fit=crop" 
              alt="Cafe Atmosphere" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[30%] group-hover:grayscale-0"
            />
            
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-kahwa-black/20"></div>
            
            {/* Map Overlay Card */}
            <div className="absolute bottom-8 right-8 bg-white p-4 max-w-xs shadow-2xl border-4 border-white transform translate-y-0 transition-transform">
               <div className="w-full h-32 bg-gray-100 mb-3 relative overflow-hidden">
                 <img src="https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-97.3598,32.7078,15,0/300x150?access_token=placeholder" alt="Map Placeholder" className="w-full h-full object-cover opacity-50" />
                 <div className="absolute inset-0 flex items-center justify-center bg-gray-100/50">
                   <span className="text-xs font-bold text-gray-500 uppercase flex items-center gap-1"><Map size={12}/> Map View</span>
                 </div>
               </div>
               <p className="font-serif text-lg italic text-gray-800 leading-tight">"The best spot near TCU for studying or catching up with friends."</p>
               <div className="mt-3 flex items-center gap-2">
                 <div className="flex text-kahwa-yellow">
                   {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                 </div>
                 <span className="text-xs font-bold text-gray-400 uppercase">— Google Reviews</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoSection;