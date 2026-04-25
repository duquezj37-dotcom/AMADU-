import React from 'react';

const items = [
  'Sublimación térmica', 'Vinilo textil', 'Impresión offset', 'Serigrafía', 'Papelería artesanal', 'Regalos corporativos'
];

const MarqueeBar: React.FC = () => {
  return (
    <div className="marquee-bar">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <React.Fragment key={i}>
            <span className="marquee-item">{item}</span>
            <span className="marquee-sep">+</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBar;
