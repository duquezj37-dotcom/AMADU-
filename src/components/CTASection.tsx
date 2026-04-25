import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="cta-section">
      <h2>¿Tienes una<br /><em>idea</em> en mente?</h2>
      <p>Cotiza gratis — respondemos en menos de 2 horas hábiles.</p>
      <div className="cta-btns">
        <button className="btn-paper">WhatsApp directo</button>
        <button className="btn-outline-paper">Ver catálogo completo</button>
      </div>
    </section>
  );
};

export default CTASection;
