import React from 'react';
import { motion } from 'framer-motion';
import Triquetra from './Triquetra';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[var(--color-cream)]">
      {/* Background Image with slow zoom */}
      <div className="absolute inset-0 w-full h-full">
        <div className="img-reveal-wrapper w-full h-full">
          {/* Subtle placeholder for hero image until client images are finalized. A soft, warm light image. */}
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop" 
            alt="Sacred Space" 
            className="img-zoom opacity-30"
          />
        </div>
        {/* Soft gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-cream)] opacity-80" />
      </div>

      {/* Massive subtle background watermark */}
      <Triquetra className="triquetra-watermark" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="eyebrow"
        >
          Mary Justus
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="heading-massive text-[var(--color-charcoal)] tracking-tight"
        >
          The Architecture of Conscious Healing
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a href="#offerings" className="btn-sacred mt-8">
            Enter the Portal
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="eyebrow text-[10px] mb-4">Scroll</span>
        <div className="w-[1px] h-12 bg-[var(--color-taupe)]" />
      </motion.div>
    </section>
  );
};

export default Hero;
