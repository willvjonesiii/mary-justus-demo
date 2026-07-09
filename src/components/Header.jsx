import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="header-container">
        <a href="/" className="logo">
          MARY JUSTUS
        </a>
        
        <nav className="desktop-nav">
          <a href="#philosophy">Philosophy</a>
          <a href="#offerings">Offerings</a>
          <a href="#about">About</a>
          <button className="btn-primary" style={{ padding: '10px 24px', fontSize: '1rem' }}>Book a Session</button>
        </nav>

        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <motion.div 
          className="mobile-nav glass"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <a href="#philosophy" onClick={() => setMobileMenuOpen(false)}>Philosophy</a>
          <a href="#offerings" onClick={() => setMobileMenuOpen(false)}>Offerings</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <button className="btn-primary">Book a Session</button>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
