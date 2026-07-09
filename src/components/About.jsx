import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <div className="glass-panel image-glass">
              {/* Using a high-quality stock image as requested until original site images are loaded */}
              <img src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Mary Justus" className="about-image" />
            </div>
          </motion.div>

          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <h2 className="section-title">The Journey</h2>
            <div className="about-divider"></div>
            
            <p className="about-text">
              Healing isn't theoretical—it's earned in the trenches of human experience. Born to a 16-year-old mother, I spent time living on the streets, navigating the heavy realities of drugs and mental health struggles. 
            </p>
            <p className="about-text">
              I know what it means to be in life-or-death situations, including sitting with a child through a suicide attempt. I weaned myself off substances and committed to doing the deepest work possible to embody my own life.
            </p>
            <p className="about-text highlight-text">
              I have been through everything so I can truly sit with you.
            </p>
            <p className="about-text">
              As a Board Certified Polarity Practitioner, Licensed Massage Therapist, Yoga Teacher, and Reiki Master, I hold space for your profound unfolding. Not to fix you, but to witness you waking up to your own light.
            </p>

            <button className="btn-outline" style={{ marginTop: '30px' }}>Read Full Story</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
