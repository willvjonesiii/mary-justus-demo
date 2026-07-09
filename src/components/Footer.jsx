import React from 'react';
import Triquetra from './Triquetra';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-charcoal)] text-[var(--color-cream)] py-24 px-8 relative overflow-hidden" id="contact">
      {/* Large faint watermark behind footer */}
      <Triquetra className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120vw] opacity-5 text-[var(--color-taupe)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        <div>
          <h2 className="heading-large text-[var(--color-cream)] mb-6">
            Begin the Journey.
          </h2>
          <p className="font-sans font-light text-[var(--color-parchment)] max-w-sm mb-12 opacity-80">
            Sessions are primarily held in-person in Hillsborough, NC. Reach out to schedule a consultation.
          </p>
          <a href="mailto:hello@maryjustus.com" className="font-display uppercase tracking-widest text-lg hover:text-[var(--color-taupe)] transition-colors">
            hello@maryjustus.com
          </a>
        </div>

        <div className="flex flex-col md:items-end justify-center">
          <nav className="flex flex-col space-y-4 md:text-right">
            {['Home', 'About', 'Offerings', 'Teaching', 'Contact'].map(link => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                className="font-display uppercase tracking-widest text-sm text-[var(--color-parchment)] hover:text-[var(--color-cream)] transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-[var(--color-taupe)] border-opacity-20 flex flex-col md:flex-row justify-between items-center text-xs font-sans text-[var(--color-parchment)] opacity-60">
        <p>&copy; {new Date().getFullYear()} Mary Justus. All Rights Reserved.</p>
        <p className="mt-4 md:mt-0">The Architecture of Conscious Healing</p>
      </div>
    </footer>
  );
};

export default Footer;
