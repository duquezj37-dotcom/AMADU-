import { Routes, Route, Navigate } from 'react-router-dom';
import PublicWebsite from './pages/PublicWebsite';
import AdminLayout from './pages/admin/AdminLayout';
import AdminLogin from './pages/admin/AdminLogin';
import ProductsManager from './pages/admin/ProductsManager';
import CategoriesManager from './pages/admin/CategoriesManager';
import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

function App() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) return null;

  return (
    <Routes>
      <Route path="/" element={<PublicWebsite />} />
      <Route path="/admin/login" element={!session ? <AdminLogin /> : <Navigate to="/admin/dashboard" />} />
      
      <Route path="/admin" element={session ? <AdminLayout /> : <Navigate to="/admin/login" />}>
        <Route index element={<Navigate to="/admin/dashboard" />} />
        <Route path="dashboard" element={<ProductsManager />} />
        <Route path="categories" element={<CategoriesManager />} />
      </Route>
      
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
