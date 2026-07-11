import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import triquetraImg from '../../Triquetra_Vector_RON_01.jpg';

const Philosophy = () => {
  const containerRef = useRef(null);
  const [activeSpoke, setActiveSpoke] = useState(null);
  const [rotation, setRotation] = useState(0);
  const rotationRef = useRef(0);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    // Triquetra is positioned at top-[42%] and left-1/2
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height * 0.42;
    
    // Only engage dial if mouse is below the center of the Triquetra
    if (e.clientY > cy) {
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      // Math.atan2 gives [0, 180] for bottom half. +90 maps right to 90, down to 180, left to 270.
      const targetAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
      
      // Continuous unwrapping algorithm for shortest path rotation
      const mod = (n, m) => ((n % m) + m) % m;
      let diff = targetAngle - mod(rotationRef.current, 360);
      if (diff > 180) diff -= 360;
      if (diff < -180) diff += 360;
      
      const newRotation = rotationRef.current + diff;
      setRotation(newRotation);
      rotationRef.current = newRotation;
      
      // Dynamically highlight pillars based on dial pointing angle
      if (targetAngle < 150) setActiveSpoke(3); // Right
      else if (targetAngle > 210) setActiveSpoke(1); // Left
      else setActiveSpoke(2); // Center
    } else {
      resetDial();
    }
  };

  const resetDial = () => {
    // Snap back to the nearest upright position (multiple of 360)
    const target = Math.round(rotationRef.current / 360) * 360;
    setRotation(target);
    rotationRef.current = target;
    setActiveSpoke(null);
  };



  return (
    <section 
      ref={containerRef} 
      className="relative h-screen min-h-[700px] max-h-[1100px] flex flex-col items-center justify-center z-10 overflow-hidden" 
      id="philosophy"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetDial}
    >
      
      {/* Fixed Parallax Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1494459940152-1e911caa8cc5?q=80&w=2800&auto=format&fit=crop")',
          filter: 'sepia(0.1) grayscale(10%) contrast(1.1)'
        }}
      />
      {/* Window Depth Shadow from the section above */}
      <div className="absolute -top-10 left-0 w-full h-10 z-10 pointer-events-none bg-[#faf9f7] shadow-[0_15px_40px_10px_rgba(0,0,0,0.5)]"></div>

      {/* Centered Triquetra Dial */}
      <div className="hidden md:flex absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] items-center justify-center z-0 pointer-events-none">
        <motion.img 
          src={triquetraImg} 
          alt="Triquetra Symbol" 
          initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
          whileInView={{ opacity: 0.8, scale: 1 }}
          animate={{ 
            rotate: rotation,
            scale: activeSpoke ? 1.05 : 1,
            opacity: activeSpoke ? 1 : 0.8
          }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 40, damping: 20 }}
          className="w-full h-full object-contain mix-blend-multiply pointer-events-none"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center relative z-10 pointer-events-none">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.3 } }
          }}
          className="text-center mb-8 md:mb-12 space-y-4 max-w-3xl relative z-20 pointer-events-none mt-[-5vh]"
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.95, filter: "blur(5px)" },
              visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 1.5, ease: "easeOut" } }
            }}
            className="flex items-center justify-center space-x-4 opacity-80"
          >
            <div className="w-12 h-[1px] bg-clinical-slate/50"></div>
            <h2 className="font-mono text-[9px] font-bold tracking-[0.3em] uppercase text-clinical-slate">Beyond Modalities. Beyond Maps.</h2>
            <div className="w-12 h-[1px] bg-clinical-slate/50"></div>
          </motion.div>
          
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 40, filter: "blur(15px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 2.5, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-clinical-slate leading-[1.1] tracking-tight"
          >
            The Architecture of <br/>
            <span className="italic text-clinical-slate/80">Conscious Healing</span>
          </motion.h1>
        </motion.div>

        {/* The 3 Pillars Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 w-full max-w-6xl relative z-20 pointer-events-auto">
          
          {/* Pillar 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className={`flex flex-col items-center text-center transition-all duration-700 ease-out z-20 ${
              activeSpoke === 1 ? 'scale-105 opacity-100' : (activeSpoke ? 'opacity-50 scale-95' : 'opacity-100 scale-100')
            }`}
          >
            <div className={`text-[6rem] font-serif italic mb-[-3rem] transition-colors duration-700 select-none ${
              activeSpoke === 1 ? 'text-clinical-gold/30 drop-shadow-lg' : 'text-clinical-slate/5'
            }`}>01</div>
            <h3 className="font-serif text-2xl text-clinical-slate mb-6 z-10">Presence</h3>
            <div className={`w-px h-12 transition-all duration-700 mb-6 ${
              activeSpoke === 1 ? 'bg-gradient-to-b from-clinical-gold to-clinical-gold/20 scale-y-125' : 'bg-gradient-to-b from-clinical-gold to-transparent'
            }`}></div>
            <p className={`font-sans text-[10px] leading-[2.5] uppercase tracking-[0.2em] max-w-xs transition-all duration-700 ${
              activeSpoke === 1 ? 'text-clinical-slate/80 blur-none opacity-100' : 'text-clinical-slate/50 blur-[2px] opacity-60 select-none'
            }`}>
              Presence does not need to be achieved. The part of you that is aware right now, reading these words, is this immediate truth.
            </p>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className={`flex flex-col items-center text-center md:mt-16 transition-all duration-700 ease-out z-20 ${
              activeSpoke === 2 ? 'scale-105 opacity-100' : (activeSpoke ? 'opacity-50 scale-95' : 'opacity-100 scale-100')
            }`}
          >
            <div className={`text-[6rem] font-serif italic mb-[-3rem] transition-colors duration-700 select-none ${
              activeSpoke === 2 ? 'text-clinical-gold/30 drop-shadow-lg' : 'text-clinical-slate/5'
            }`}>02</div>
            <h3 className="font-serif text-2xl text-clinical-slate mb-6 z-10">Love</h3>
            <div className={`w-px h-12 transition-all duration-700 mb-6 ${
              activeSpoke === 2 ? 'bg-gradient-to-b from-clinical-gold to-clinical-gold/20 scale-y-125' : 'bg-gradient-to-b from-clinical-gold to-transparent'
            }`}></div>
            <p className={`font-sans text-[10px] leading-[2.5] uppercase tracking-[0.2em] max-w-xs transition-all duration-700 ${
              activeSpoke === 2 ? 'text-clinical-slate/80 blur-none opacity-100' : 'text-clinical-slate/50 blur-[2px] opacity-60 select-none'
            }`}>
              A compassionate field held without demand, where what is dissolving is the deep, unconscious belief in separation.
            </p>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className={`flex flex-col items-center text-center transition-all duration-700 ease-out z-20 ${
              activeSpoke === 3 ? 'scale-105 opacity-100' : (activeSpoke ? 'opacity-50 scale-95' : 'opacity-100 scale-100')
            }`}
          >
            <div className={`text-[6rem] font-serif italic mb-[-3rem] transition-colors duration-700 select-none ${
              activeSpoke === 3 ? 'text-clinical-gold/30 drop-shadow-lg' : 'text-clinical-slate/5'
            }`}>03</div>
            <h3 className="font-serif text-2xl text-clinical-slate mb-6 z-10">Power</h3>
            <div className={`w-px h-12 transition-all duration-700 mb-6 ${
              activeSpoke === 3 ? 'bg-gradient-to-b from-clinical-gold to-clinical-gold/20 scale-y-125' : 'bg-gradient-to-b from-clinical-gold to-transparent'
            }`}></div>
            <p className={`font-sans text-[10px] leading-[2.5] uppercase tracking-[0.2em] max-w-xs transition-all duration-700 ${
              activeSpoke === 3 ? 'text-clinical-slate/80 blur-none opacity-100' : 'text-clinical-slate/50 blur-[2px] opacity-60 select-none'
            }`}>
              The power of your own light, recognized and embodied. Not transformed into something new. Remembered as what you already are.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Philosophy;
