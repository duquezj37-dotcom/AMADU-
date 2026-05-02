import React from 'react';

interface NavbarProps {
  onContactClick: () => void;
  isAdmin?: boolean;
  onAddClick?: () => void;
  onLogout?: () => void;
  onAdminLoginClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick, isAdmin, onAddClick, onLogout, onAdminLoginClick }) => {
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
        {isAdmin ? (
          <>
            <button className="nav-contact" onClick={onAddClick} style={{ background: 'var(--ink)', color: 'var(--paper)' }}>+ Publicar</button>
            <button className="nav-contact" onClick={onLogout} style={{ border: 'none' }}>Salir</button>
          </>
        ) : (
          <>
            <button className="nav-contact" onClick={onAdminLoginClick} style={{ border: 'none', padding: '9px 10px' }}>Admin</button>
            <button className="nav-contact" onClick={onContactClick}>Cotizar</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
