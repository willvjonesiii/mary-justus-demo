import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import maryImg from '../../6Q0A2105printcropped.webp';

const MeetMary = () => {
  const { scrollYProgress } = useScroll();
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <section className="relative z-10 w-full bg-clinical-slate/5 py-16 md:py-24" id="practitioner">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8 w-full">
        <div className="w-full rounded-[2rem] overflow-hidden bg-white/40 border border-white shadow-sm px-6 py-16 md:px-16 md:py-24 flex items-center">
          <div className="max-w-7xl mx-auto w-full relative">
          
          <div className="flex flex-col md:flex-row items-end md:items-center justify-between relative">
            
            {/* Background Text Accent */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 text-[12vw] font-serif italic text-clinical-slate/5 whitespace-nowrap select-none pointer-events-none">
              The Practitioner
            </div>

            {/* Left: Image Container (Parallax up) */}
            <motion.div 
              style={{ y: yImage }}
              className="w-full md:w-5/12 relative mb-16 md:mb-0 z-10"
            >
              <div className="aspect-[3/4] w-full overflow-hidden relative group rounded-xl shadow-lg">
                <img 
                  src={maryImg} 
                  alt="Mary Justus" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>
            </motion.div>

            {/* Right: Glassmorphic Text Card (Parallax down) overlapping the image */}
            <motion.div 
              style={{ y: yText }}
              className="w-full md:w-8/12 md:-ml-24 relative z-30"
            >
              <div className="bg-white/80 backdrop-blur-xl border border-white p-8 md:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] rounded-2xl">
                <div className="flex items-center space-x-4 mb-10">
                  <div className="w-12 h-[1px] bg-clinical-gold"></div>
                  <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-clinical-gold">Where the Wisdom of the Body Meets the Mystery of Being</span>
                </div>

                <h2 className="font-serif text-4xl md:text-6xl text-clinical-slate leading-[1.1] mb-10">
                  Meet <span className="italic text-clinical-slate/70">Mary.</span>
                </h2>

                <div className="space-y-6 font-sans text-[13px] md:text-[14px] text-clinical-slate/70 leading-loose max-w-xl">
                  <p>
                    Mary Justus is a psychospiritual practitioner, researcher, and teacher exploring the deeper architecture of Reality and the evolutionary unfolding of consciousness during this time of profound transition. Through the lenses of somatics, spiritual psychology, esoteric philosophy, and embodied energetic modalities, she supports others in becoming more authentic, resilient, discerning, and aligned with the deeper intelligence of the Soul.
                  </p>
                  <p>
                    A mother, artist, and lifelong student of both the seen and unseen dimensions of life, Mary's path was profoundly shaped by a near-death experience in early adulthood, which awakened a deep devotion to exploring consciousness, healing, and the relationship between Awareness and embodiment.
                  </p>
                  <p>
                    She integrates somatics, subtle energetics, nervous system awareness, intuitive perception, astrology, movement practices, contemplative inquiry, and embodied Presence into a compassionate and multidimensional approach to human transformation.
                  </p>
                  <p className="font-serif italic text-xl text-clinical-slate pt-4">
                    "At the deepest level of healing, what is dissolving is not just symptoms or patterns, but the deep, unconscious ingrained belief in separation."
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
        </div>
      </div>
    </section>
  );
};

export default MeetMary;
