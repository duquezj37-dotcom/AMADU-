import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import { LayoutDashboard, Tag, LogOut, Globe } from 'lucide-react';

const AdminLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const navItems = [
    { name: 'Productos / Servicios', path: '/admin/dashboard', icon: <LayoutDashboard size={18} /> },
    { name: 'Categorías', path: '/admin/categories', icon: <Tag size={18} /> },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#F9FAFB', fontFamily: 'Inter, sans-serif' }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', background: 'var(--ink)', color: 'var(--paper)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '2rem' }}>
          <div className="logo-mark" style={{ color: 'var(--paper)', fontSize: '24px' }}>AMADU<span style={{ color: 'var(--accent)' }}>.</span></div>
          <p style={{ fontSize: '10px', letterSpacing: '2px', color: 'rgba(245,242,236,0.5)', marginTop: '4px', textTransform: 'uppercase' }}>Admin Panel</p>
        </div>

        <nav style={{ flex: 1, padding: '0 1rem' }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    style={{ 
                      display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', 
                      borderRadius: '6px', textDecoration: 'none', fontSize: '13px',
                      background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                      color: isActive ? 'var(--paper)' : 'rgba(245,242,236,0.6)',
                      transition: 'all 0.2s'
                    }}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div style={{ padding: '1rem' }}>
          <a href="/" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', textDecoration: 'none', color: 'rgba(245,242,236,0.6)', fontSize: '13px' }}>
            <Globe size={18} />
            Ver sitio web
          </a>
          <button 
            onClick={handleLogout} 
            style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'transparent', border: 'none', color: '#EF4444', fontSize: '13px', cursor: 'pointer', width: '100%', textAlign: 'left' }}
          >
            <LogOut size={18} />
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <header style={{ background: '#FFF', padding: '1.5rem 3rem', borderBottom: '1px solid #E5E7EB' }}>
          <h1 style={{ fontSize: '20px', fontWeight: 600, color: '#111827', fontFamily: 'Fraunces, serif' }}>
            {navItems.find(i => i.path === location.pathname)?.name || 'Panel'}
          </h1>
        </header>
        <div style={{ padding: '3rem', flex: 1, overflowY: 'auto' }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
