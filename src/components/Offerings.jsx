import React from 'react';
import { motion } from 'framer-motion';

const Offerings = () => {

  const offerings = [
    {
      title: "Reiki & Energy Work",
      subtitle: "01",
      desc: "Usui Reiki Master-level attunement work, restoring flow and coherence to the body's energetic field.",
      image: "https://images.unsplash.com/photo-1562026700-3425431ecb5b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Polarity Therapy",
      subtitle: "02",
      desc: "Board-certified polarity work bridging body, mind, and energy for release and reintegration.",
      image: "https://images.unsplash.com/photo-1444312645910-ffa973656eba?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Somatic & Craniosacral",
      subtitle: "03",
      desc: "Registered somatic movement therapy and craniosacral work for the nervous system and severe complex trauma, with plant medicine integration support.",
      image: "https://images.unsplash.com/photo-1507290439931-a861b5a38200?q=80&w=2832&auto=format&fit=crop"
    }
  ];

  return (
    <section className="relative z-20 w-full bg-clinical-sand pt-10 pb-16 md:pb-32 shadow-[0_-6px_20px_0_rgba(0,0,0,0.06)]" id="offerings">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8 w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center text-center py-12 md:py-16"
        >
          {/* Top Decorative Line */}
          <div className="w-px h-12 md:h-16 bg-gradient-to-b from-transparent to-clinical-gold/50 mb-8"></div>
          
          <h3 className="font-serif text-5xl md:text-6xl lg:text-7xl text-clinical-slate leading-[1.1] tracking-tight mb-8">
            Sessions for the <span className="italic text-clinical-slate/60">deep work.</span>
          </h3>
          
          <div className="flex items-center space-x-4">
            <div className="w-8 h-[1px] bg-clinical-gold/30"></div>
            <h2 className="font-mono text-[9px] tracking-[0.3em] uppercase text-clinical-gold">Individual & Partner Sessions · In-Person</h2>
            <div className="w-8 h-[1px] bg-clinical-gold/30"></div>
          </div>
          
          {/* Bottom Decorative Line */}
          <div className="w-px h-12 md:h-16 bg-gradient-to-t from-transparent to-clinical-gold/50 mt-8"></div>
        </motion.div>
      </div>

      {/* Horizontal Accordion Container - Sharp edges, no pill boxes */}
      <div className="flex flex-col md:flex-row w-full h-[800px] md:h-[600px] border-y border-clinical-slate/20 bg-clinical-slate">
          {offerings.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative flex-1 hover:flex-[2.5] transition-[flex] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border-b md:border-b-0 md:border-r border-clinical-slate/30 last:border-b-0 last:border-r-0 overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full z-0 bg-black">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale-[20%] opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                {/* Cinematic Vignette / Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/80 group-hover:via-black/20 transition-all duration-1000"></div>
              </div>

              {/* Content Box */}
              <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-[1px] bg-clinical-gold"></div>
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-clinical-gold">
                    {item.subtitle}
                  </span>
                </div>
                
                <h4 className="font-serif text-2xl md:text-4xl text-white mb-0 group-hover:mb-2 transition-all duration-700 whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.title}
                </h4>
                
                {/* Expandable Description & CTA */}
                <div className="max-h-0 opacity-0 group-hover:max-h-[500px] group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden">
                  <div className="pt-4">
                    <p className="font-sans text-[13px] md:text-[14px] leading-loose text-white/80 w-[280px] md:w-[360px] mb-8">
                      {item.desc}
                    </p>
                    
                    {/* Booking CTA */}
                    <button className="font-sans text-[9px] tracking-[0.2em] uppercase text-white bg-white/5 backdrop-blur-md border border-white/20 hover:border-clinical-gold hover:bg-clinical-gold/20 hover:text-white transition-all duration-500 px-8 py-4 flex items-center space-x-3 group/btn w-fit">
                      <span>Book Session</span>
                      <svg className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform text-white/70 group-hover/btn:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>

    </section>
  );
};

export default Offerings;
