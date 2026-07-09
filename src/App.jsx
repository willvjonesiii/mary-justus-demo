import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import MeetMary from './components/MeetMary';
import Philosophy from './components/Philosophy';
import Offerings from './components/Offerings';
import Footer from './components/Footer';

// Removed CustomCursor
// The global ambient sacred geometry background
const BackgroundGeometry = () => (
  <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#faf9f7]">
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
  return (
    <div className="font-sans antialiased text-clinical-slate selection:bg-clinical-gold selection:text-white min-h-screen">

      <BackgroundGeometry />
      
      {/* High-Fashion Asymmetrical Nav */}
      <header className="fixed top-0 w-full z-50 p-6 md:p-10 pointer-events-none">
        <div className="w-full flex items-start justify-between">
          <div className="pointer-events-auto flex flex-col items-start">
            <span className="font-serif text-2xl tracking-widest uppercase text-clinical-slate font-medium leading-none">Mary</span>
            <span className="font-serif text-2xl tracking-widest uppercase text-clinical-slate font-medium leading-none ml-4">Justus</span>
            <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-clinical-gold mt-2">Architecture of Healing</span>
          </div>
          
          <nav className="pointer-events-auto hidden md:flex flex-col items-end space-y-4">
            {['Philosophy', 'Offerings', 'Practitioner', 'Connect'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="group flex items-center space-x-3 overflow-hidden"
              >
                <div className="w-6 h-[1px] bg-clinical-gold scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500"></div>
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-clinical-slate/60 group-hover:text-clinical-slate transition-colors">
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
        <MeetMary />
        <Footer />
      </main>
    </div>
  );
}

export default App;
