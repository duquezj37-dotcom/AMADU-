import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="testimonial-section">
      <div>
        <p className="testimonial-q">"Buscábamos algo que <strong>realmente representara</strong> nuestra empresa. Amadu lo entendió desde el primer boceto."</p>
        <div className="testimonial-author">
          <strong>Laura Martínez</strong>
          <span>Directora — Empresa de servicios, Bogotá</span>
        </div>
      </div>
      <div className="testimonials-list">
        <div className="t-item">
          <div className="t-stars">★★★★★</div>
          <p className="t-text">"Las tazas para el cumpleaños de mi mamá quedaron perfectas. Todos preguntaban dónde las había mandado a hacer."</p>
          <div className="t-who">Carlos P. — Cliente particular</div>
        </div>
        <div className="t-item">
          <div className="t-stars">★★★★★</div>
          <p className="t-text">"Usamos su servicio para toda la papelería de nuestra boda. Artesanal, única y a un precio justo."</p>
          <div className="t-who">Sandra R. — Clienta particular</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
