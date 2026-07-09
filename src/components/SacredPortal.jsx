import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SacredPortal = () => {
  const [activeNode, setActiveNode] = useState(null);

  // Delicate 4-point star for ethereal accents
  const Star = ({ cx, cy, scale = 1, rotation = 0, opacity = 1 }) => (
    <g transform={`translate(${cx}, ${cy}) scale(${scale}) rotate(${rotation})`} opacity={opacity}>
      <path d="M0 -10 Q 0 0, 10 0 Q 0 0, 0 10 Q 0 0, -10 0 Q 0 0, 0 -10" fill="currentColor" />
      <circle cx="0" cy="0" r="1.5" fill="#fff" />
    </g>
  );

  // Individual Triquetra Lobe
  const Petal = ({ angle, active, label }) => {
    const isActive = active === label;
    const isDimmed = active !== null && active !== label;

    return (
      <motion.g
        transform={`rotate(${angle})`}
        animate={{
          scale: isActive ? 1.05 : 1,
          opacity: isDimmed ? 0.2 : 1
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Outer delicate sweeping line */}
        <path 
          d="M0 -110 C 60 -40, 60 50, 0 90 C -60 50, -60 -40, 0 -110 Z" 
          stroke="currentColor" 
          strokeWidth="0.5" 
          fill={isActive ? "rgba(212, 175, 55, 0.05)" : "transparent"} 
          className="transition-colors duration-1000"
        />
        {/* Inner intricate dashed line (replacing the stippling effect beautifully) */}
        <path 
          d="M0 -100 C 50 -35, 50 45, 0 80 C -50 45, -50 -35, 0 -100 Z" 
          stroke="currentColor" 
          strokeWidth="0.5" 
          strokeDasharray="2 6"
          fill="none" 
        />
        {/* Node interaction point */}
        <circle cx="0" cy="-110" r="2.5" fill="currentColor" />
        <circle 
          cx="0" 
          cy="-110" 
          r="8" 
          stroke="currentColor" 
          strokeWidth="0.5" 
          fill="none" 
          opacity={isActive ? 1 : 0} 
          className="transition-opacity duration-1000" 
        />
      </motion.g>
    );
  };

  return (
    <div className="relative w-full max-w-[1000px] min-h-[500px] md:aspect-[16/9] flex items-center justify-center mx-auto">
      
      {/* Ambient Rotating Geometry (Subtle Background Detail) */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-0 opacity-[0.06]"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full text-clinical-slate" fill="none" stroke="currentColor">
          <circle cx="100" cy="100" r="95" strokeWidth="0.1" />
          <circle cx="100" cy="100" r="90" strokeWidth="0.3" strokeDasharray="1 4" />
          <circle cx="100" cy="100" r="50" strokeWidth="0.1" />
          <path d="M 5 100 L 195 100 M 100 5 L 100 195" strokeWidth="0.1" />
        </svg>
      </motion.div>

      {/* Main Triquetra Container */}
      <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] flex items-center justify-center">
        <div className="absolute z-10 w-full h-full pointer-events-none">
          <svg viewBox="0 0 300 300" className="w-full h-full text-clinical-gold drop-shadow-sm" fill="none">
            <g transform="translate(150, 150)">
              
              {/* Central binding ring */}
              <circle cx="0" cy="0" r="45" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
              <circle cx="0" cy="0" r="35" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" opacity="0.3" />
              
              {/* 3 Petals of the Triquetra */}
              <Petal angle={0} active={activeNode} label="top" />
              <Petal angle={120} active={activeNode} label="right" />
              <Petal angle={240} active={activeNode} label="left" />

              {/* Magical Accents */}
              <g className="text-clinical-gold" opacity="0.6">
                <Star cx="0" cy="-140" scale="0.8" />
                <Star cx="-120" cy="70" scale="0.6" rotation="15" />
                <Star cx="120" cy="70" scale="0.6" rotation="-15" />
              </g>

            </g>
          </svg>
        </div>

        {/* Invisible Interaction Hitboxes */}
        <div 
          className="absolute z-40 rounded-full cursor-crosshair w-[140px] h-[140px] top-[-15%] left-1/2 -translate-x-1/2" 
          onPointerEnter={() => setActiveNode('top')}
          onPointerLeave={() => setActiveNode(null)}
        ></div>
        <div 
          className="absolute z-40 rounded-full cursor-crosshair w-[140px] h-[140px] bottom-[0%] left-[-15%]" 
          onPointerEnter={() => setActiveNode('left')}
          onPointerLeave={() => setActiveNode(null)}
        ></div>
        <div 
          className="absolute z-40 rounded-full cursor-crosshair w-[140px] h-[140px] bottom-[0%] right-[-15%]" 
          onPointerEnter={() => setActiveNode('right')}
          onPointerLeave={() => setActiveNode(null)}
        ></div>
      </div>

      {/* 
        High-End Floating Typography Blocks 
        Positioned dynamically in the negative space around the geometry 
      */}

      {/* TOP: Realization Process */}
      <div 
        className={`absolute top-[5%] left-1/2 -translate-x-1/2 flex flex-col items-center text-center z-30 w-[280px] transition-all duration-700 ease-out ${
          activeNode === 'top' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <h3 className="font-serif text-3xl md:text-4xl text-clinical-slate mb-4 italic tracking-tight">Realization Process</h3>
        <div className="w-12 h-[1px] bg-clinical-gold mb-5"></div>
        <p className="font-sans text-[10px] md:text-[11px] text-clinical-slate/60 leading-[2.5] uppercase tracking-[0.25em]">
          Anchoring conscious presence to resolve the deep, ingrained belief in separation.
        </p>
      </div>

      {/* LEFT: Somatic Movement */}
      <div 
        className={`absolute bottom-[10%] md:bottom-[25%] left-[5%] md:left-[5%] flex flex-col items-start text-left z-30 w-[200px] md:w-[260px] transition-all duration-700 ease-out ${
          activeNode === 'left' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6 pointer-events-none'
        }`}
      >
        <h3 className="font-serif text-3xl md:text-4xl text-clinical-slate mb-4 italic tracking-tight">Somatic <br/>Movement</h3>
        <div className="w-12 h-[1px] bg-clinical-gold mb-5"></div>
        <p className="font-sans text-[10px] md:text-[11px] text-clinical-slate/60 leading-[2.5] uppercase tracking-[0.25em]">
          Physical repatterning and neurological integration to restore authentic authority.
        </p>
      </div>

      {/* RIGHT: Quantum Energy */}
      <div 
        className={`absolute bottom-[10%] md:bottom-[25%] right-[5%] md:right-[5%] flex flex-col items-end text-right z-30 w-[200px] md:w-[260px] transition-all duration-700 ease-out ${
          activeNode === 'right' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6 pointer-events-none'
        }`}
      >
        <h3 className="font-serif text-3xl md:text-4xl text-clinical-slate mb-4 italic tracking-tight">Quantum <br/>Energy</h3>
        <div className="w-12 h-[1px] bg-clinical-gold mb-5 ml-auto"></div>
        <p className="font-sans text-[10px] md:text-[11px] text-clinical-slate/60 leading-[2.5] uppercase tracking-[0.25em]">
          Biophotonic alignment and energetic resonance mapping for the subtle body.
        </p>
      </div>

    </div>
  );
};

export default SacredPortal;

