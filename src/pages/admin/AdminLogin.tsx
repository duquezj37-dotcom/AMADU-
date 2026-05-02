import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);
    if (error) {
      setErrorMsg('Credenciales incorrectas.');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--ink)' }}>
      <div style={{ background: 'var(--paper)', padding: '3rem', width: '100%', maxWidth: '400px' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="logo-mark" style={{ fontSize: '32px' }}>AMADU<span>.</span></div>
          <p style={{ color: 'var(--muted)', fontSize: '12px', marginTop: '0.5rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Panel Administrativo</p>
        </div>
        
        {errorMsg && <div style={{ color: 'red', fontSize: '12px', marginBottom: '1rem', textAlign: 'center' }}>{errorMsg}</div>}
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="form-group">
            <label>Correo Electrónico</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
          <button type="submit" className="btn-fill" style={{ width: '100%', marginTop: '1rem' }} disabled={loading}>
            {loading ? 'Ingresando...' : 'Ingresar'}
          </button>
          
          <a href="/" style={{ textAlign: 'center', display: 'block', fontSize: '11px', color: 'var(--muted)', textDecoration: 'underline', marginTop: '1rem' }}>Volver al sitio público</a>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
