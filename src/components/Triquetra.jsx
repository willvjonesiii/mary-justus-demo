import React from 'react';

const Triquetra = ({ className }) => (
  <svg 
    viewBox="0 0 100 100" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`triquetra-svg ${className}`}
    preserveAspectRatio="xMidYMid meet"
  >
    {/* Elegant thin-line triquetra with circle */}
    <path d="M 50 15 C 65 15, 80 40, 65 60 C 50 80, 20 80, 35 60 C 50 40, 35 15, 50 15 Z" />
    <path d="M 25 60 C 10 40, 35 15, 50 35 C 65 55, 45 80, 25 60 Z" />
    <path d="M 75 60 C 90 40, 65 15, 50 35 C 35 55, 55 80, 75 60 Z" />
    <circle cx="50" cy="48" r="28" />
  </svg>
);

export default Triquetra;
