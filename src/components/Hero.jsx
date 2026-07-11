import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImg from '../../mary-justus-hero.jpg';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden" id="home">
      
      {/* Background Blocker to erase the rotating lines behind the feathered image */}
      <div 
        className="absolute top-0 right-0 w-full md:w-[65%] h-[100vh] z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at center, var(--color-clinical-white) 50%, transparent 100%)'
        }}
      ></div>

      {/* Editorial Image placement (asymmetrical right-aligned) */}
      <motion.div 
        className="absolute top-0 right-0 w-full md:w-[60%] h-[100vh] z-0 overflow-hidden"
        style={{ 
          y, 
          opacity,
          WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at center, black 40%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 50% 50% at center, black 40%, transparent 100%)'
        }}
      >
        <img 
          src={heroImg} 
          alt="Mary Justus Ethereal" 
          className="w-full h-full object-cover object-[center_30%] sepia-[0.10] contrast-[1.1] grayscale-[10%]"
        />
      </motion.div>

      {/* Overlapping Typography (Left-aligned, overlapping the image) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col justify-center h-full pt-24">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="overflow-hidden mb-2">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-[11rem] font-serif text-clinical-slate leading-[0.85] tracking-tight"
            >
              Beyond
            </motion.h1>
          </div>
          
          <div className="overflow-hidden flex items-center mb-12 md:pl-4">
            <div className="w-12 md:w-20 h-[1px] bg-clinical-gold mr-6 hidden md:block"></div>
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-[11rem] font-serif text-clinical-slate leading-[0.85] tracking-tight italic"
            >
              Modalities.
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-12 pl-2 md:pl-48"
          >
            <p className="font-sans text-[10px] md:text-[11px] text-clinical-slate/60 max-w-xs leading-loose uppercase tracking-widest relative">
              <span className="absolute -left-6 top-2 w-4 h-[1px] bg-clinical-gold hidden md:block"></span>
              A journey of involution. Returning to the architecture of consciousness before the separation of form.
            </p>
            
            {/* Scroll Indicator */}
            <div className="flex flex-col items-center pt-8 md:pt-0">
              <span className="font-mono text-[8px] tracking-[0.2em] text-clinical-slate/40 uppercase mb-4 rotate-90 md:rotate-0 origin-left">Scroll</span>
              <div className="w-[1px] h-16 bg-clinical-slate/20 overflow-hidden relative">
                <motion.div 
                  animate={{ y: ['-100%', '100%'] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="absolute inset-0 w-full h-1/2 bg-clinical-gold"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
    </section>
  );
};

export default Hero;
