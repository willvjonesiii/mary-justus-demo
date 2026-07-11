import React from 'react';
import { motion } from 'framer-motion';
import maryProfile from '../assets/mary-profile.png';

const Substack = () => {
  return (
    <section className="relative z-10 w-full bg-[#faf9f7] py-16 md:py-24" id="substack">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8 w-full">
        <div className="w-full rounded-[2rem] overflow-hidden bg-white border border-clinical-slate/10 shadow-sm px-6 py-16 md:px-16 md:py-24 flex justify-center">
          <div className="w-full max-w-5xl">
            
            <div className="mb-12 text-center md:text-left">
              <h2 className="font-mono text-[9px] tracking-[0.3em] uppercase text-clinical-gold mb-4">Writings & Reflections</h2>
              <h3 className="font-serif text-3xl md:text-5xl text-clinical-slate leading-[1.1]">
                Read on <span className="italic text-clinical-slate/70">Substack</span>
              </h3>
            </div>

            <motion.a 
              href="https://substack.com/@altarofordinarylife"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="block group bg-white border border-clinical-slate/10 shadow-sm hover:shadow-xl hover:border-clinical-slate/20 transition-all duration-500 overflow-hidden rounded-xl"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* OG Image */}
                <div className="w-full md:w-[45%] h-64 md:h-auto relative overflow-hidden bg-clinical-slate/5">
                  <img 
                    src="https://plus.unsplash.com/premium_photo-1681412205172-8c06ca667689?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Altar of Ordinary Life" 
                    className="w-full h-full object-cover grayscale-[30%] sepia-[0.1] group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Substack Logo Mark overlay */}
                  <div className="absolute top-6 left-6 bg-[#FF6719] text-white p-2.5 rounded shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM22.539 12.086H1.46v9.806l10.539-5.872 10.54 5.872v-9.806zM1.46 1.558h21.08v2.836H1.46V1.558z"/>
                    </svg>
                  </div>
                </div>
                
                {/* OG Content */}
                <div className="w-full md:w-[55%] p-10 md:p-14 flex flex-col justify-center bg-[#faf9f7]/50 relative">
                  <span className="font-sans text-[10px] tracking-widest uppercase text-clinical-slate/40 mb-4 block">
                    substack.com
                  </span>
                  <h4 className="font-serif text-3xl md:text-4xl text-clinical-slate mb-6 group-hover:text-clinical-gold transition-colors duration-300">
                    Altar of Ordinary Life
                  </h4>
                  <p className="font-sans text-[14px] text-clinical-slate/70 leading-relaxed mb-10 line-clamp-3">
                    Ongoing reflections on the involutionary journey, somatics, and finding the sacred in the everyday. Exploring the deeper architecture of Reality and the evolutionary unfolding of consciousness.
                  </p>
                  
                  {/* Author Footer */}
                  <div className="flex items-center space-x-4 mt-auto pt-8 border-t border-clinical-slate/10">
                    <div className="w-10 h-10 rounded-full bg-clinical-slate/10 overflow-hidden shadow-inner">
                      <img src={maryProfile} alt="Mary Justus" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-sans text-[12px] font-medium text-clinical-slate uppercase tracking-wider">Mary Justus</span>
                  </div>
                </div>
              </div>
            </motion.a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Substack;
