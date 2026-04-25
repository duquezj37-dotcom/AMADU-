import React from 'react';

const Proceso: React.FC = () => {
  return (
    <section className="proceso-section" id="proceso">
      <div className="section-tag">Cómo trabajamos</div>
      <div className="proceso-row">
        <div className="paso">
          <div className="paso-num">1</div>
          <div className="paso-label">Paso 01</div>
          <h4>Brief creativo</h4>
          <p>Conversamos sobre tu idea, tu marca y tus objetivos. Sin formularios complicados — directo al grano.</p>
        </div>
        <div className="paso">
          <div className="paso-num">2</div>
          <div className="paso-label">Paso 02</div>
          <h4>Diseño y prueba</h4>
          <p>Desarrollamos el concepto visual y te enviamos una previsualización para tu aprobación.</p>
        </div>
        <div className="paso">
          <div className="paso-num">3</div>
          <div className="paso-label">Paso 03</div>
          <h4>Producción</h4>
          <p>Una vez aprobado, producimos con los mejores materiales y tecnología de impresión.</p>
        </div>
        <div className="paso">
          <div className="paso-num">4</div>
          <div className="paso-label">Paso 04</div>
          <h4>Entrega</h4>
          <p>Recoge en tienda o coordina envío a domicilio. Tu pedido, cuando lo necesitas.</p>
        </div>
      </div>
    </section>
  );
};

export default Proceso;
