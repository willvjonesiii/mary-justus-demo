import React from 'react';
import { motion } from 'framer-motion';

const MeetMary = () => {
  return (
    <section className="section-padding bg-[var(--color-parchment)] relative" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Subtle decorative framing */}
          <div className="absolute -inset-4 border border-[var(--color-taupe)] opacity-30 transform translate-x-4 translate-y-4" />
          
          <div className="img-reveal-wrapper w-full aspect-[3/4] shadow-2xl">
            <img 
              src="/mary.jpg" 
              alt="Mary Justus" 
              className="img-zoom"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="eyebrow">The Practitioner</span>
          <h2 className="heading-large text-[var(--color-charcoal)]">
            Embody the form with your light.
          </h2>
          
          <div className="sacred-line" style={{ margin: '2rem 0' }} />

          <p className="body-large">
            I am a Board Certified Polarity Practitioner, Licensed Massage Therapist, Yoga Teacher, and Usui Reiki Master. But beyond the modalities and beyond the maps, my work is about the power of presence. 
          </p>
          <p className="body-large">
            People come to me not to become something different, or to be transformed into someone else. They come to wake up and recognize that they already have everything within them. This is the evolutionary, involutionary journey of the soul.
          </p>

          <a href="#contact" className="btn-sacred mt-6">
            Work With Me
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default MeetMary;
