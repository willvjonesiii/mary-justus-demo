import React from 'react';
import Triquetra from './Triquetra';

const Footer = () => {
  return (
    <footer className="bg-clinical-slate text-clinical-white py-14 md:py-16 px-8 relative overflow-hidden" id="contact">
      {/* Faint watermark, scaled down to match the footer's actual proportions */}
      <Triquetra className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[45vw] max-w-[420px] opacity-[0.04] text-clinical-lightGold pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 relative z-10">
        <div>
          <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-clinical-gold mb-4">
            Contact
          </p>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-4">
            Come as <em className="italic text-clinical-lightGold">you</em> are.
          </h2>
          <p className="font-sans font-light text-sm text-clinical-white/70 max-w-sm mb-6 leading-relaxed">
            In-person sessions and Reiki training held in Hillsborough, NC.<br/>
            Individual, partner, and small-group work available by request.
          </p>
          <a href="mailto:hello@maryjustus.com" className="font-sans text-sm tracking-wide text-clinical-lightGold hover:text-clinical-gold transition-colors">
            hello@maryjustus.com
          </a>
        </div>

        <div className="flex flex-col md:items-end justify-center">
          <nav className="flex flex-col space-y-2.5 md:text-right">
            {['Home', 'About', 'Offerings', 'Teaching', 'Contact'].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-sans uppercase tracking-[0.2em] text-[11px] text-clinical-white/60 hover:text-clinical-white transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-clinical-lightGold/10 flex flex-col md:flex-row justify-between items-center gap-2 text-[11px] font-sans text-clinical-white/45">
        <p>&copy; {new Date().getFullYear()} Mary Justus. All Rights Reserved.</p>
        <p className="font-serif italic text-clinical-white/55">Come home to your true self and shine your light in the world.</p>
      </div>
    </footer>
  );
};

export default Footer;
