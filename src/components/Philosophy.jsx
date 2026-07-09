import React from 'react';
import { motion } from 'framer-motion';
import Triquetra from './Triquetra';

const Philosophy = () => {
  return (
    <section className="section-padding bg-[var(--color-cream)] relative text-center">
      <div className="max-w-4xl mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5 }}
          className="mb-12 flex justify-center"
        >
          <Triquetra className="w-24 h-24 text-[var(--color-taupe)] opacity-50" />
        </motion.div>

        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="eyebrow"
        >
          The Core Pillars
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="heading-medium text-[var(--color-charcoal)] italic px-4"
        >
          "Light, Love, and Power. Allowing people to shine."
        </motion.h2>

        <div className="sacred-line max-w-xs mx-auto" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 text-left">
          {[
            {
              title: "Light",
              desc: "Integrating plant medicine journeys and resolving complex trauma by illuminating the shadows."
            },
            {
              title: "Love",
              desc: "A deeply held space using singing bowls, crystals, and energetic resonance to hold you safely."
            },
            {
              title: "Power",
              desc: "Reclaiming your sovereignty through 1:1 sessions and grounded, embodied presence."
            }
          ].map((pillar, i) => (
            <motion.div 
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 + (i * 0.2) }}
              className="flex flex-col items-center text-center"
            >
              <h3 className="font-display uppercase tracking-widest text-[var(--color-charcoal)] text-xl mb-4">
                {pillar.title}
              </h3>
              <p className="font-sans font-light text-gray-600 leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
