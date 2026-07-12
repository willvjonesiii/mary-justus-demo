import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import MeetMary from './components/MeetMary';
import Philosophy from './components/Philosophy';
import Offerings from './components/Offerings';
import Training from './components/Training';
import Substack from './components/Substack';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import MobileGate from './components/MobileGate';

// Removed CustomCursor
// The global ambient sacred geometry background
const BackgroundGeometry = () => (
  <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-clinical-white">
    {/* Subtle paper grain */}
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
    
    {/* Massive rotating mandala lines */}
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 left-1/2 w-[150vw] h-[150vw] md:w-[100vw] md:h-[100vw] -translate-x-1/2 -translate-y-1/2 opacity-10 flex items-center justify-center"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full text-clinical-slate" fill="none" stroke="currentColor" strokeWidth="0.1">
        <circle cx="50" cy="50" r="48" />
        <circle cx="50" cy="50" r="38" />
        <circle cx="50" cy="50" r="28" strokeDasharray="1 2" />
        {/* Seed of life pattern lines */}
        {[0, 60, 120, 180, 240, 300].map(angle => (
          <circle key={angle} cx="50" cy="22" r="28" transform={`rotate(${angle} 50 50)`} />
        ))}
      </svg>
    </motion.div>
  </div>
);

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans antialiased text-clinical-slate selection:bg-clinical-gold selection:text-white min-h-screen">

      <MobileGate />
      <BackgroundGeometry />
      
      {/* Frosted Glass Background Bar (Decoupled to prevent height snapping) */}
      <div className={`fixed top-0 left-0 w-full h-[64px] z-40 pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border-b ${
        isScrolled ? 'bg-clinical-white/90 backdrop-blur-md border-clinical-slate/10 shadow-[0_4px_30px_rgba(0,0,0,0.03)]' : 'bg-clinical-white/0 backdrop-blur-none border-clinical-slate/0 shadow-[0_4px_30px_rgba(0,0,0,0)]'
      }`}></div>

      {/* High-Fashion Asymmetrical Nav */}
      <header className={`fixed top-0 w-full z-50 pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled ? 'py-4' : 'py-6 md:py-10'
      }`}>
        <div className={`w-full flex justify-between px-6 md:px-10 transition-all duration-700 ${isScrolled ? 'items-center' : 'items-start'}`}>
          <div className={`pointer-events-auto flex transition-all duration-700 ${isScrolled ? 'flex-row items-center space-x-6' : 'flex-col items-start'}`}>
            <div className="flex items-center">
              <span className={`font-serif tracking-widest uppercase text-clinical-slate font-medium leading-none transition-all duration-700 ${isScrolled ? 'text-lg' : 'text-2xl'}`}>Mary</span>
              <span className={`font-serif tracking-widest uppercase text-clinical-slate font-medium leading-none transition-all duration-700 ${isScrolled ? 'text-lg ml-2' : 'text-2xl ml-4'}`}>Justus</span>
            </div>
            <div className={`transition-all duration-700 ${isScrolled ? 'mt-0 border-l border-clinical-gold/30 pl-6 py-0.5' : 'mt-2 border-l-0 pl-0 py-0'}`}>
              <span className={`font-mono tracking-[0.3em] uppercase text-clinical-gold block transition-all duration-700 ${isScrolled ? 'text-[9px]' : 'text-[8px]'}`}>Architecture of Healing</span>
            </div>
          </div>
          
          <nav className={`pointer-events-auto hidden md:flex transition-all duration-700 ${isScrolled ? 'flex-row items-center space-x-8 space-y-0' : 'flex-col items-end space-y-4'}`}>
            {['Philosophy', 'Offerings', 'Training', 'Practitioner', 'Substack', 'Connect'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className={`group flex items-center overflow-hidden ${isScrolled ? 'space-x-0' : 'space-x-3'}`}
              >
                <div className={`h-[1px] bg-clinical-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${isScrolled ? 'hidden' : 'w-6 origin-right'}`}></div>
                <span className={`font-sans tracking-[0.25em] uppercase text-clinical-slate/60 group-hover:text-clinical-slate transition-colors ${isScrolled ? 'text-[9px]' : 'text-[10px]'}`}>
                  {item}
                </span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="pointer-events-auto md:hidden">
             <button className="font-sans text-[10px] tracking-[0.15em] uppercase px-5 py-2 border border-clinical-slate/20 rounded-full text-clinical-slate">
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* The main content wraps will use high padding for the editorial 'breathing room' */}
      <main className="relative z-10 w-full overflow-x-hidden">
        <Hero />
        <Philosophy />
        <Offerings />
        <Training />
        <MeetMary />
        <Substack />
        <Testimonial />
        <Footer />
      </main>
    </div>
  );
}

export default App;
