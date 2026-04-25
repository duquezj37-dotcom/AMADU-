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
      <button className="nav-contact" onClick={onContactClick}>Cotizar</button>
    </nav>
  );
};

export default Navbar;
