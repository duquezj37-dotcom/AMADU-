import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <section className="portfolio-section" id="portafolio">
      <div className="portfolio-header">
        <div className="portfolio-title">Trabajos</div>
        <button className="portfolio-link">Ver todo el portafolio →</button>
      </div>
      <div className="portfolio-grid">
        <div className="pf-card">
          <div className="pf-bg" style={{ background: '#D85A30', height: '100%' }}>
            <svg viewBox="0 0 200 300" width="140" xmlns="http://www.w3.org/2000/svg">
              <rect x="40" y="20" width="120" height="160" rx="4" fill="rgba(245,242,236,0.15)" />
              <rect x="60" y="40" width="80" height="80" fill="rgba(245,242,236,0.2)" />
              <text x="100" y="170" fontFamily="'Bebas Neue',sans-serif" fontSize="22" fill="#F5F2EC" textAnchor="middle">AMADU</text>
              <rect x="40" y="200" width="50" height="50" fill="rgba(14,14,12,0.3)" />
              <rect x="110" y="200" width="50" height="50" fill="rgba(245,242,236,0.1)" stroke="#F5F2EC" strokeWidth="1" />
            </svg>
          </div>
          <div className="pf-overlay">
            <div className="pf-cat">Branding corporativo</div>
            <div className="pf-name">Identidad Amadu Estudio</div>
          </div>
        </div>
        <div className="pf-card">
          <div className="pf-bg" style={{ background: '#1D9E75', height: '100%' }}>
            <svg viewBox="0 0 160 160" width="100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="80" cy="80" r="60" fill="none" stroke="rgba(245,242,236,0.3)" strokeWidth="1" />
              <circle cx="80" cy="80" r="40" fill="rgba(245,242,236,0.15)" />
              <text x="80" y="86" fontFamily="'Bebas Neue',sans-serif" fontSize="18" fill="#F5F2EC" textAnchor="middle">TAZA</text>
            </svg>
          </div>
          <div className="pf-overlay">
            <div className="pf-cat">Sublimación</div>
            <div className="pf-name">Colección mugs 2025</div>
          </div>
        </div>
        <div className="pf-card">
          <div className="pf-bg" style={{ background: '#2C2C2A', height: '100%' }}>
            <svg viewBox="0 0 160 160" width="100" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="20" width="120" height="120" fill="none" stroke="#D85A30" strokeWidth="1" />
              <rect x="35" y="35" width="90" height="90" fill="rgba(245,242,236,0.05)" />
              <text x="80" y="84" fontFamily="'IBM Plex Mono',monospace" fontSize="10" fill="rgba(245,242,236,0.5)" textAnchor="middle">PAPELERÍA</text>
              <text x="80" y="97" fontFamily="'IBM Plex Mono',monospace" fontSize="10" fill="rgba(245,242,236,0.5)" textAnchor="middle">ARTESANAL</text>
            </svg>
          </div>
          <div className="pf-overlay">
            <div className="pf-cat">Papelería creativa</div>
            <div className="pf-name">Kit agenda 2026</div>
          </div>
        </div>
        <div className="pf-card">
          <div className="pf-bg" style={{ background: '#F5F2EC', height: '100%' }}>
            <svg viewBox="0 0 160 160" width="100" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="50" width="120" height="60" rx="4" fill="#0E0E0C" />
              <text x="80" y="84" fontFamily="'Bebas Neue',sans-serif" fontSize="18" fill="#D85A30" textAnchor="middle">UNIFORME</text>
              <line x1="20" y1="30" x2="140" y2="30" stroke="#0E0E0C" strokeWidth="1" />
              <line x1="20" y1="130" x2="140" y2="130" stroke="#0E0E0C" strokeWidth="1" />
            </svg>
          </div>
          <div className="pf-overlay" style={{ background: 'linear-gradient(transparent,rgba(14,14,12,0.7))' }}>
            <div className="pf-cat">Estampados</div>
            <div className="pf-name">Uniformes Resto 360</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
