import React, { useEffect, useState } from 'react';

const MobileGate = () => {
  const [gated, setGated] = useState(false);

  useEffect(() => {
    const check = () => setGated(window.innerWidth < 900);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = gated ? 'hidden' : '';
  }, [gated]);

  if (!gated) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center text-center px-8"
      style={{
        backdropFilter: 'blur(46px) saturate(115%)',
        WebkitBackdropFilter: 'blur(46px) saturate(115%)',
        background: 'rgba(42,44,46,0.62)',
      }}
      aria-hidden="true"
    >
      <span className="text-3xl mb-6" style={{ color: 'var(--color-clinical-gold)' }}>&#10022;</span>
      <p
        className="font-mono uppercase mb-5"
        style={{ fontSize: '0.68rem', letterSpacing: '0.28em', color: 'var(--color-clinical-gold)' }}
      >
        Mary Justus
      </p>
      <h2
        className="font-serif italic mb-4"
        style={{ fontSize: 'clamp(1.6rem, 6vw, 2.1rem)', lineHeight: 1.3, color: 'var(--color-clinical-white)', maxWidth: '20ch' }}
      >
        This experience was woven for a wider frame.
      </h2>
      <p
        className="font-sans mb-4"
        style={{ fontSize: '0.95rem', color: 'rgba(253,252,251,0.85)', maxWidth: '32ch' }}
      >
        Please revisit this page on a desktop or laptop to enter.
      </p>
      <p
        className="font-serif italic"
        style={{ fontSize: '0.9rem', color: 'var(--color-clinical-lightGold)', opacity: 0.85, maxWidth: '34ch' }}
      >
        A living mobile experience is woven for every client who joins us. This preview is simply held for the larger stage, for now.
      </p>
    </div>
  );
};

export default MobileGate;
