import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import AIBarista from './components/AIBarista';

function App() {
  return (
    <div className="min-h-screen bg-kahwa-cream font-sans antialiased text-kahwa-dark">
      <Navbar />
      <main>
        <Hero />
        <InfoSection />
        <MenuSection />
      </main>
      <AIBarista />
      <Footer />
    </div>
  );
}

export default App;