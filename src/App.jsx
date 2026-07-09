import React from 'react';
import Hero from './components/Hero';
import MeetMary from './components/MeetMary';
import Philosophy from './components/Philosophy';
import Offerings from './components/Offerings';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[var(--color-cream)] min-h-screen text-[var(--color-charcoal)] font-sans antialiased">
      <Hero />
      <MeetMary />
      <Philosophy />
      <Offerings />
      <Footer />
    </div>
  );
}

export default App;
