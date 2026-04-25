import React from 'react';

const StatsBar: React.FC = () => {
  return (
    <div className="stats-bar">
      <div className="stat"><div className="stat-n">500+</div><div className="stat-l">Clientes satisfechos</div></div>
      <div className="stat"><div className="stat-n">8</div><div className="stat-l">Años de experiencia</div></div>
      <div className="stat"><div className="stat-n">50+</div><div className="stat-l">Productos disponibles</div></div>
      <div className="stat"><div className="stat-n">24h</div><div className="stat-l">Entregas express</div></div>
    </div>
  );
};

export default StatsBar;
