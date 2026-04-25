import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <div>
          <div className="hero-label">Estudio creativo — desde 2016</div>
          <h1>Diseño<br />que <em>vive</em><br />en tus<br />manos.</h1>
        </div>
        <p className="hero-sub">Sublimación, estampados, impresiones y papelería creativa. Transformamos ideas en objetos que comunican, sorprenden y perduran.</p>
        <div className="hero-actions">
          <button className="btn-fill">Ver servicios</button>
          <button className="btn-link">Ver portafolio →</button>
        </div>
      </div>
      <div className="hero-right">
        <svg className="canvas-art" viewBox="0 0 340 480" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="340" height="480" fill="#0E0E0C" />
          <rect x="20" y="20" width="140" height="200" fill="#D85A30" />
          <rect x="180" y="20" width="140" height="95" fill="#F5F2EC" />
          <rect x="180" y="135" width="140" height="85" fill="#1D9E75" />
          <rect x="20" y="240" width="300" height="1" fill="rgba(245,242,236,0.2)" />
          <rect x="20" y="260" width="80" height="80" fill="none" stroke="#D85A30" stroke-width="1.5" />
          <rect x="120" y="260" width="80" height="80" fill="rgba(245,242,236,0.05)" stroke="rgba(245,242,236,0.2)" stroke-width="1" />
          <rect x="220" y="260" width="100" height="80" fill="#F5F2EC" />
          <text x="20" y="380" fontFamily="'IBM Plex Mono',monospace" fontSize="11" fill="rgba(245,242,236,0.35)" letterSpacing="2">SUBLIMACIÓN</text>
          <text x="20" y="396" fontFamily="'IBM Plex Mono',monospace" fontSize="11" fill="rgba(245,242,236,0.35)" letterSpacing="2">ESTAMPADOS</text>
          <text x="20" y="412" fontFamily="'IBM Plex Mono',monospace" fontSize="11" fill="rgba(245,242,236,0.35)" letterSpacing="2">IMPRESIÓN</text>
          <text x="20" y="428" fontFamily="'IBM Plex Mono',monospace" fontSize="11" fill="rgba(245,242,236,0.35)" letterSpacing="2">PAPELERÍA</text>
          <line x1="160" y1="380" x2="320" y2="380" stroke="rgba(245,242,236,0.1)" strokeWidth="1" />
          <line x1="160" y1="396" x2="280" y2="396" stroke="rgba(245,242,236,0.1)" strokeWidth="1" />
          <line x1="160" y1="412" x2="300" y2="412" stroke="#D85A30" strokeWidth="1" />
          <line x1="160" y1="428" x2="240" y2="428" stroke="rgba(245,242,236,0.1)" strokeWidth="1" />
          <text x="60" y="48" fontFamily="'Bebas Neue',sans-serif" fontSize="11" fill="#F5F2EC" letterSpacing="2">DISEÑO</text>
          <text x="60" y="62" fontFamily="'Bebas Neue',sans-serif" fontSize="11" fill="#F5F2EC" letterSpacing="2">QUE IMPACTA</text>
          <circle cx="130" cy="170" r="28" fill="rgba(245,242,236,0.15)" stroke="#F5F2EC" strokeWidth="1" />
          <text x="130" y="175" fontFamily="'IBM Plex Mono',monospace" fontSize="10" fill="#F5F2EC" textAnchor="middle">2016</text>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
