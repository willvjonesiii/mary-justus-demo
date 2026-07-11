import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Training = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative z-10 w-full bg-clinical-gold py-16 md:py-24" id="training">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8 w-full">
        <motion.a 
          href="#reiki-training-details"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative block group overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-700 bg-[#faf9f7] rounded-[2rem]"
        >
        <div className="flex flex-col md:flex-row h-full relative">
          
          {/* Image Section */}
          <div className="w-full md:w-1/2 h-[400px] md:h-auto relative overflow-hidden">
            <img 
              src="https://plus.unsplash.com/premium_photo-1688464908065-b35d802fd1a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVpa2l8ZW58MHx8MHx8fDA%3D" 
              alt="Reiki Training" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 p-10 md:p-16 lg:p-24 relative z-10 flex flex-col justify-center text-clinical-slate">
            
            <div className="mb-10">
              <h2 className="font-mono text-[9px] tracking-[0.3em] uppercase text-clinical-slate/60 mb-4">Classes & Workshops</h2>
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-clinical-slate leading-[1.1]">
                <span className="italic text-clinical-slate/80">Embodied</span> Reiki Training
              </h3>
            </div>
            
            <div className="w-12 h-px bg-clinical-slate/30 mb-8"></div>

            <h4 className="font-serif text-2xl md:text-3xl mb-6">
              Level I & II Immersion
            </h4>
            <p className="font-sans text-[13px] md:text-[14px] leading-relaxed mb-10 opacity-80 max-w-lg">
              A comprehensive two-day training integrating somatic and embodiment-based foundations alongside traditional Reiki attunements. Learn to work with subtle energy while remaining deeply anchored in the physical body.
            </p>
            
            <div className="flex flex-wrap gap-8 mb-12">
              <div className="flex flex-col">
                <span className="font-mono text-[8px] uppercase tracking-widest opacity-50 mb-2">Next Dates</span>
                <span className="font-sans text-[12px] font-medium tracking-wider">Join the Waitlist</span>
              </div>
              <div className="w-px h-10 bg-clinical-slate/20 hidden md:block"></div>
              <div className="flex flex-col">
                <span className="font-mono text-[8px] uppercase tracking-widest opacity-50 mb-2">Location</span>
                <span className="font-sans text-[12px] font-medium tracking-wider">Hillsborough, NC</span>
              </div>
            </div>

            <div className="mt-auto">
              <div className="font-sans text-[9px] tracking-[0.2em] uppercase text-clinical-slate bg-white/50 backdrop-blur-md border border-white group-hover:border-clinical-gold group-hover:bg-clinical-gold/10 transition-all duration-500 px-8 py-4 flex items-center space-x-3 w-fit shadow-sm">
                <span>Explore Curriculum</span>
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform text-clinical-slate/70 group-hover:text-clinical-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </div>
          </div>
          
          {/* Subtle light effect on hover */}
          <motion.div 
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none"
          ></motion.div>
        </div>
      </motion.a>
      </div>
    </section>
  );
};

export default Training;
