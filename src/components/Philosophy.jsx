import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import triquetraImg from '../../Triquetra_Vector_RON_01.jpg';

const Philosophy = () => {
  const containerRef = useRef(null);

  // Track scroll specifically for this section so the parallax is localized and highly noticeable
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Massive parallax effect
  const bgY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section ref={containerRef} className="relative pt-16 md:pt-24 pb-32 md:pb-48 min-h-screen flex flex-col items-center justify-center z-10 overflow-hidden" id="philosophy">
      
      {/* Ethereal Background Image */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute -inset-[400px] z-0 pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1494459940152-1e911caa8cc5?q=80&w=2800&auto=format&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover opacity-90 sepia-[0.1] grayscale-[10%] contrast-[1.1]"
        />
      </motion.div>
      {/* Soft gradient overlay to seamlessly fade the top and bottom edges into the rest of the site, while leaving the center visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf9f7] via-[#faf9f7]/30 to-[#faf9f7] z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 md:mb-32 space-y-6 max-w-3xl relative z-20"
        >
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-[1px] bg-clinical-gold"></div>
            <h2 className="font-mono text-[9px] tracking-[0.3em] uppercase text-clinical-gold">Dissolving Separation</h2>
            <div className="w-12 h-[1px] bg-clinical-gold"></div>
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-clinical-slate leading-[1.1] tracking-tight">
            The Architecture of <br/>
            <span className="italic text-clinical-slate/80">Conscious Healing</span>
          </h1>
          
          <p className="font-sans text-[11px] text-clinical-slate/60 leading-loose uppercase tracking-widest mx-auto max-w-lg mt-8">
            The structure of consciousness is already there. It only materializes when brought to light through direct attention.
          </p>
        </motion.div>

        {/* The 3 Pillars Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 w-full max-w-6xl relative">
          
          {/* Custom Triquetra Symbol (User JPG) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            className="hidden md:flex absolute top-[3rem] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] items-center justify-center pointer-events-none z-10"
          >
            <img 
              src={triquetraImg} 
              alt="Triquetra Symbol" 
              className="w-full h-full object-contain mix-blend-multiply opacity-80"
            />
          </motion.div>

          {/* Pillar 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="text-[8rem] font-serif italic text-clinical-slate/5 mb-[-4rem] group-hover:text-clinical-slate/10 transition-colors duration-700 select-none">01</div>
            <h3 className="font-serif text-2xl text-clinical-slate mb-6 z-10">Realization Process</h3>
            <div className="w-px h-12 bg-gradient-to-b from-clinical-gold to-transparent mb-6"></div>
            <p className="font-sans text-[10px] text-clinical-slate/60 leading-[2.5] uppercase tracking-[0.2em] max-w-xs">
              Anchoring conscious presence to resolve the deep, ingrained belief in separation.
            </p>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col items-center text-center group md:mt-24"
          >
            <div className="text-[8rem] font-serif italic text-clinical-slate/5 mb-[-4rem] group-hover:text-clinical-slate/10 transition-colors duration-700 select-none">02</div>
            <h3 className="font-serif text-2xl text-clinical-slate mb-6 z-10">Somatic Movement</h3>
            <div className="w-px h-12 bg-gradient-to-b from-clinical-gold to-transparent mb-6"></div>
            <p className="font-sans text-[10px] text-clinical-slate/60 leading-[2.5] uppercase tracking-[0.2em] max-w-xs">
              Physical repatterning and neurological integration to restore authentic authority.
            </p>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="text-[8rem] font-serif italic text-clinical-slate/5 mb-[-4rem] group-hover:text-clinical-slate/10 transition-colors duration-700 select-none">03</div>
            <h3 className="font-serif text-2xl text-clinical-slate mb-6 z-10">Quantum Energy</h3>
            <div className="w-px h-12 bg-gradient-to-b from-clinical-gold to-transparent mb-6"></div>
            <p className="font-sans text-[10px] text-clinical-slate/60 leading-[2.5] uppercase tracking-[0.2em] max-w-xs">
              Biophotonic alignment and energetic resonance mapping for the subtle body.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Philosophy;
