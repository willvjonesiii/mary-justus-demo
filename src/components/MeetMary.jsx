import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import maryImg from '../../6Q0A2105printcropped.webp';

const MeetMary = () => {
  const { scrollYProgress } = useScroll();
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section className="relative py-32 md:py-48 min-h-screen flex items-center z-10" id="practitioner">
      <div className="max-w-7xl mx-auto px-6 w-full relative">
        
        <div className="flex flex-col md:flex-row items-end md:items-center justify-between relative">
          
          {/* Background Text Accent */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 text-[15vw] font-serif italic text-clinical-slate/5 whitespace-nowrap select-none pointer-events-none">
            The Practitioner
          </div>

          {/* Left: Image Container (Parallax up) */}
          <motion.div 
            style={{ y: yImage }}
            className="w-full md:w-5/12 relative mb-16 md:mb-0 z-10"
          >
            <div className="aspect-[3/4] w-full overflow-hidden relative group">
              <div className="absolute inset-0 bg-clinical-gold/10 mix-blend-overlay z-20 group-hover:bg-transparent transition-colors duration-1000"></div>
              <img 
                src={maryImg} 
                alt="Mary Justus" 
                className="w-full h-full object-cover sepia-[0.3] grayscale-[40%] contrast-125 group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </div>
            {/* Geometric accents */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-clinical-slate/30"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b border-r border-clinical-slate/30"></div>
          </motion.div>

          {/* Right: Glassmorphic Text Card (Parallax down) overlapping the image */}
          <motion.div 
            style={{ y: yText }}
            className="w-full md:w-8/12 md:-ml-24 relative z-30"
          >
            <div className="bg-white/60 backdrop-blur-xl border border-white p-8 md:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]">
              <div className="flex items-center space-x-4 mb-10">
                <div className="w-12 h-[1px] bg-clinical-gold"></div>
                <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-clinical-gold">The Architect</span>
              </div>

              <h2 className="font-serif text-4xl md:text-6xl text-clinical-slate leading-[1.1] mb-10">
                Holding space for the <br/>
                <span className="italic text-clinical-slate/70">involutionary</span> journey.
              </h2>

              <div className="space-y-6 font-sans text-[13px] md:text-[14px] text-clinical-slate/70 leading-loose max-w-xl">
                <p>
                  I am a Board Certified Polarity Practitioner, Licensed Massage Therapist, Reiki Master, and Yoga Teacher. My work specializes in severe complex trauma and plant medicine integration.
                </p>
                <p>
                  My journey began navigating deep complex trauma from a young age. This path didn't break me; it forged a deep understanding of the architecture of healing. I learned that true healing isn't about becoming something different—it's about returning to what is already whole within you.
                </p>
                <p className="font-serif italic text-xl text-clinical-slate pt-4">
                  "People come to me not to transform, but to leave feeling more themselves. To embody the form with their light."
                </p>
              </div>

              <button className="group relative overflow-hidden flex items-center justify-center mt-12 pb-2">
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-clinical-slate transition-colors flex items-center space-x-3">
                  <span>Connect with Mary</span>
                </span>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-clinical-slate scale-x-100 group-hover:scale-x-0 origin-right transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-clinical-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MeetMary;
