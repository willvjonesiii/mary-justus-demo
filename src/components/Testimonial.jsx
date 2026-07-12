import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "As a traditionally-trained physician, I have been underwhelmed with available treatments for my autoimmune arthritis. I have been seeing Mary for nearly a decade now, and her treatments are by far the single factor responsible for improving my quality of life. Her energy is finely tuned as a compassionate, caring and deeply soothing presence. Mary is truly an angel.",
    author: "Oren C.",
    rotation: -3.5,
    scale: 0.98,
    paper: '#FDFCFA',
    edge: 'torn-edge-1',
    pinRotate: -8
  },
  {
    quote: "Mary's somatic approach helped me uncover and release patterns I had been carrying for years. Her presence is a rare gift that creates a truly safe container for profound, lasting transformation.",
    author: "Elena R.",
    rotation: 2.5,
    scale: 1.02,
    paper: '#F7F4EC',
    edge: 'torn-edge-2',
    pinRotate: 5
  },
  {
    quote: "The Level I & II Reiki immersion was a turning point. She teaches with such deep reverence for the lineage while anchoring the practice entirely in the physical body. A life-changing weekend.",
    author: "Sarah M.",
    rotation: -1.5,
    scale: 1,
    paper: '#F5EFDE',
    edge: 'torn-edge-3',
    pinRotate: -3
  }
];

const Testimonial = () => {
  return (
    <section className="relative z-10 w-full bg-clinical-sand py-16 md:py-24" id="testimonial">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap');
          .font-handwriting { font-family: 'Caveat', cursive; }

          /* Three distinct, irregular torn-edge silhouettes -- no two cards share a shape */
          .torn-edge-1 {
            clip-path: polygon(
              0% 0%, 100% 0%,
              100% calc(100% - 5px), 97% 100%, 92% calc(100% - 7px),
              88% 100%, 85% calc(100% - 3px), 80% 100%, 74% calc(100% - 11px),
              70% 100%, 66% calc(100% - 4px), 61% 100%, 55% calc(100% - 9px),
              50% 100%, 47% calc(100% - 2px), 41% 100%, 36% calc(100% - 8px),
              31% 100%, 27% calc(100% - 5px), 22% 100%, 17% calc(100% - 12px),
              13% 100%, 8% calc(100% - 3px), 4% 100%, 0% calc(100% - 6px)
            );
          }
          .torn-edge-2 {
            clip-path: polygon(
              0% 0%, 100% 0%,
              100% calc(100% - 9px), 95% 100%, 90% calc(100% - 4px),
              86% 100%, 82% calc(100% - 10px), 77% 100%, 72% calc(100% - 5px),
              69% 100%, 63% calc(100% - 8px), 59% 100%, 54% calc(100% - 3px),
              48% 100%, 44% calc(100% - 12px), 40% 100%, 35% calc(100% - 6px),
              30% 100%, 26% calc(100% - 4px), 21% 100%, 16% calc(100% - 9px),
              12% 100%, 7% calc(100% - 5px), 3% 100%, 0% calc(100% - 3px)
            );
          }
          .torn-edge-3 {
            clip-path: polygon(
              0% 0%, 100% 0%,
              100% calc(100% - 4px), 96% 100%, 91% calc(100% - 11px),
              87% 100%, 83% calc(100% - 6px), 78% 100%, 73% calc(100% - 3px),
              68% 100%, 64% calc(100% - 9px), 58% 100%, 53% calc(100% - 5px),
              49% 100%, 45% calc(100% - 7px), 39% 100%, 34% calc(100% - 3px),
              29% 100%, 24% calc(100% - 10px), 20% 100%, 15% calc(100% - 4px),
              11% 100%, 6% calc(100% - 8px), 2% 100%, 0% calc(100% - 5px)
            );
          }

          .paper-grain {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E");
            mix-blend-mode: multiply;
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
                initial={{ opacity: 0, y: 40, rotate: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, rotate: t.rotation, scale: t.scale }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                className="relative flex"
              >
                <div className="drop-shadow-md w-full h-full flex">
                  <div
                    className={`relative p-8 md:p-10 ${t.edge} border border-black/[0.04] w-full h-full flex flex-col`}
                    style={{ backgroundColor: t.paper }}
                  >
                    {/* Paper grain overlay, unique per card via its own tint */}
                    <div className="paper-grain absolute inset-0 pointer-events-none opacity-[0.05]"></div>

                    {/* Pin: metal highlight + asymmetric cast shadow, not a flat vector dot */}
                    <div
                      className="absolute -top-2 left-1/2 w-7 h-3 rounded-full blur-[2px] opacity-70"
                      style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.35), transparent 70%)', transform: `translateX(calc(-50% + 3px)) rotate(${t.pinRotate}deg)` }}
                    ></div>
                    <div
                      className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full z-10"
                      style={{
                        background: 'radial-gradient(circle at 35% 30%, #f0d9b5, #b98a52 55%, #6b4a28 100%)',
                        boxShadow: '1px 3px 4px rgba(0,0,0,0.35), inset 0 0 1px rgba(255,255,255,0.6)'
                      }}
                    ></div>

                    <blockquote
                      className="font-handwriting text-[21px] md:text-[23px] leading-snug mt-4 flex-grow text-center relative z-[1]"
                      style={{ color: '#232847', opacity: 0.88 }}
                    >
                      "{t.quote}"
                    </blockquote>
                    
                    <cite
                      className="block text-right font-handwriting text-xl not-italic mt-6 pr-2 relative z-[1]"
                      style={{ color: '#232847', opacity: 0.7 }}
                    >
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
