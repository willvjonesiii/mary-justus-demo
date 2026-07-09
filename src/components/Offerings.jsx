import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Offerings = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const offerings = [
    {
      title: "Polarity",
      subtitle: "1:1 Somatic Therapy",
      desc: "Balancing the energetic field, resolving trauma held in the physical body.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2920&auto=format&fit=crop",
      y: y1,
      marginTop: "mt-0",
      height: "h-[600px]"
    },
    {
      title: "Integration",
      subtitle: "Plant Medicine",
      desc: "Navigating profound shifts. Weaving insights into your lived reality.",
      image: "https://images.unsplash.com/photo-1608688326265-27a3c7dfbf4a?q=80&w=2940&auto=format&fit=crop",
      y: y2,
      marginTop: "md:mt-48",
      height: "h-[700px]"
    },
    {
      title: "Reiki",
      subtitle: "Subtle Energy",
      desc: "Clearing blockages to allow your natural light to shine.",
      image: "https://images.unsplash.com/photo-1507290439931-a861b5a38200?q=80&w=2832&auto=format&fit=crop",
      y: y3,
      marginTop: "md:mt-24",
      height: "h-[600px]"
    }
  ];

  return (
    <section className="relative py-32 md:py-48 z-10 overflow-hidden" id="offerings">
      
      <div className="max-w-[90rem] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 md:mb-32">
          <div>
            <h2 className="font-mono text-[9px] tracking-[0.3em] uppercase text-clinical-gold mb-6">Containers for Growth</h2>
            <h3 className="font-serif text-5xl md:text-7xl lg:text-[7rem] text-clinical-slate leading-[0.9] tracking-tight">
              The <span className="italic text-clinical-slate/80">Offerings</span>
            </h3>
          </div>
          <div className="w-full md:w-1/3 mt-12 md:mt-0 text-[11px] font-sans text-clinical-slate/60 leading-relaxed uppercase tracking-widest pl-0 md:pl-6">
            Structured containers designed to facilitate deep involution. Modalities are merely maps to the territory within.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 relative">
          {offerings.map((item, idx) => (
            <motion.div 
              key={idx}
              style={{ y: item.y }}
              className={`group relative flex flex-col ${item.height} ${item.marginTop} cursor-pointer`}
            >
              {/* Image Container */}
              <div className="absolute inset-0 w-full h-full overflow-hidden bg-clinical-slate">
                <div className="absolute inset-0 bg-clinical-slate/40 group-hover:bg-clinical-slate/20 transition-colors duration-1000 z-10"></div>
                {/* Gradient to make text readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-clinical-slate/90 via-transparent to-transparent z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale-[30%] sepia-[0.2] contrast-125 transform group-hover:scale-105 transition-transform duration-[2s] ease-out opacity-80"
                />
              </div>

              {/* Massive Overlapping Typography */}
              <div className="relative z-20 flex flex-col justify-end h-full p-8 md:p-12 text-white">
                <div className="overflow-hidden mb-2">
                  <h4 className="font-serif text-5xl lg:text-7xl italic leading-none transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                    {item.title}
                  </h4>
                </div>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-8 h-[1px] bg-clinical-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-100"></div>
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-clinical-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    {item.subtitle}
                  </span>
                </div>

                <p className="font-sans text-[12px] leading-loose text-white/70 max-w-[80%] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100">
                  {item.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
