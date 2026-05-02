import React from 'react';

interface NavbarProps {
  onContactClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  return (
    <nav>
      <div className="logo-mark">AMADU<span>.</span></div>
      <ul className="nav-menu">
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#portafolio">Portafolio</a></li>
        <li><a href="#proceso">Proceso</a></li>
        <li><a href="#nosotros">Nosotros</a></li>
      </ul>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button className="nav-contact" onClick={onContactClick}>Cotizar</button>
      </div>
    </nav>
  );
};

export default Navbar;
