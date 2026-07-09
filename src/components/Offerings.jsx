import React from 'react';
import { motion } from 'framer-motion';

const Offerings = () => {
  const offerings = [
    {
      title: "1:1 Polarity Therapy",
      desc: "A deeply grounding somatic experience to balance your energetic field, resolve trauma, and bring you back to your innate wholeness.",
      price: "$180 / 90 min"
    },
    {
      title: "Plant Medicine Integration",
      desc: "Safe, supportive guidance before and after ceremonial work to ensure deep insights become lasting, embodied change.",
      price: "$150 / 75 min"
    },
    {
      title: "Reiki & Sound Healing",
      desc: "Using the resonant frequencies of singing bowls and Usui Reiki to calm the nervous system and restore your light.",
      price: "$120 / 60 min"
    }
  ];

  return (
    <section className="section-padding bg-[var(--color-parchment)]" id="offerings">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <span className="eyebrow">Offerings</span>
          <h2 className="heading-large text-[var(--color-charcoal)]">
            Sacred Containers
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offerings.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-[var(--color-cream)] p-12 border border-[var(--color-taupe)] border-opacity-30 flex flex-col items-center text-center group hover:border-opacity-100 transition-colors duration-500"
            >
              <h3 className="font-display text-xl uppercase tracking-widest text-[var(--color-charcoal)] mb-6">
                {item.title}
              </h3>
              <p className="font-sans font-light text-gray-600 leading-relaxed mb-8 flex-grow">
                {item.desc}
              </p>
              <div className="w-12 h-[1px] bg-[var(--color-taupe)] mb-6 opacity-50 group-hover:w-24 transition-all duration-500" />
              <span className="eyebrow !mb-0">{item.price}</span>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <a href="#contact" className="btn-sacred">
            Book a Session
          </a>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
