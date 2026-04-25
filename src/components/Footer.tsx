import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <footer id="nosotros">
        <div className="footer-brand">
          <div className="logo-mark">AMADU<span>.</span></div>
          <p>Estudio creativo especializado en sublimación, estampados, impresiones y papelería artesanal.</p>
        </div>
        <div className="footer-col">
          <h6>Servicios</h6>
          <ul>
            <li><a href="#">Sublimación</a></li>
            <li><a href="#">Estampados</a></li>
            <li><a href="#">Copias</a></li>
            <li><a href="#">Papelería</a></li>
            <li><a href="#">Regalos</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h6>Estudio</h6>
          <ul>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Portafolio</a></li>
            <li><a href="#">Proceso</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h6>Contacto</h6>
          <ul>
            <li><a href="#">WhatsApp</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Correo</a></li>
          </ul>
        </div>
      </footer>
      <div className="footer-bottom">
        <p>© 2026 Amadu Estudio. Todos los derechos reservados.</p>
        <p style={{ fontSize: '11px', color: '#888780' }}>Hecho con criterio y carácter.</p>
      </div>
    </>
  );
};

export default Footer;
