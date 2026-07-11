import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "As a traditionally-trained physician, I have been underwhelmed with available treatments for my autoimmune arthritis. I have been seeing Mary for nearly a decade now, and her treatments are by far the single factor responsible for improving my quality of life. Her energy is finely tuned as a compassionate, caring and deeply soothing presence. Mary is truly an angel.",
    author: "Oren C.",
    rotation: -2
  },
  {
    quote: "Mary's somatic approach helped me uncover and release patterns I had been carrying for years. Her presence is a rare gift that creates a truly safe container for profound, lasting transformation.",
    author: "Elena R.",
    rotation: 1
  },
  {
    quote: "The Level I & II Reiki immersion was a turning point. She teaches with such deep reverence for the lineage while anchoring the practice entirely in the physical body. A life-changing weekend.",
    author: "Sarah M.",
    rotation: -1
  }
];

const Testimonial = () => {
  return (
    <section className="relative z-10 w-full bg-[#faf9f7] py-16 md:py-24" id="testimonial">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap');
          .font-handwriting { font-family: 'Caveat', cursive; }
          .torn-edge {
            clip-path: polygon(
              0% 0%, 100% 0%, 
              100% calc(100% - 8px), 95% 100%, 91% calc(100% - 5px), 
              87% 100%, 83% calc(100% - 9px), 79% 100%, 75% calc(100% - 4px), 
              71% 100%, 67% calc(100% - 10px), 63% 100%, 59% calc(100% - 6px), 
              55% 100%, 51% calc(100% - 8px), 47% 100%, 43% calc(100% - 5px), 
              39% 100%, 35% calc(100% - 11px), 31% 100%, 27% calc(100% - 4px), 
              23% 100%, 19% calc(100% - 9px), 15% 100%, 11% calc(100% - 5px), 
              7% 100%, 3% calc(100% - 8px), 0% 100%
            );
          }
        `}
      </style>
      
      <div className="max-w-[90rem] mx-auto px-4 md:px-8 w-full">
        <div className="w-full rounded-[2rem] overflow-hidden bg-clinical-slate/[0.03] border border-clinical-slate/5 shadow-sm px-4 py-16 md:px-12 md:py-24 flex justify-center">
          <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
          
          <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-clinical-gold mb-16 text-center">
            Words of Experience
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 w-full">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: t.rotation }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                className="relative flex"
              >
                <div className="drop-shadow-sm w-full h-full flex">
                  <div className="relative bg-white/95 backdrop-blur-sm p-8 md:p-10 torn-edge border border-clinical-slate/5 w-full h-full flex flex-col">
                    {/* Pin accent */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-8 h-2 bg-clinical-slate/10 rounded-full blur-[1px]"></div>
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/80 rounded-full shadow-sm border border-clinical-slate/20 flex items-center justify-center">
                      <div className="w-1 h-1 bg-clinical-slate/40 rounded-full"></div>
                    </div>
                    
                    <blockquote className="font-handwriting text-[21px] md:text-[23px] leading-snug text-clinical-slate/80 mt-4 flex-grow text-center">
                      "{t.quote}"
                    </blockquote>
                    
                    <cite className="block text-right font-handwriting text-xl text-clinical-slate/60 not-italic mt-6 pr-2">
                      — {t.author}
                    </cite>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
