import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeBar from './components/MarqueeBar';
import ProductList from './components/ProductList';
import Portfolio from './components/Portfolio';
import Proceso from './components/Proceso';
import StatsBar from './components/StatsBar';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import AddProductModal from './components/AddProductModal';
import AdminLoginModal from './components/AdminLoginModal';

function App() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAdmin(!!session);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAdmin(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleProductAdded = () => {
    setRefreshKey(prev => prev + 1);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="site">
      <Navbar 
        onContactClick={() => {
          window.location.href = 'mailto:duquezj37@gmail.com';
        }} 
        isAdmin={isAdmin}
        onAddClick={() => setIsAddModalOpen(true)}
        onLogout={handleLogout}
        onAdminLoginClick={() => setIsAdminLoginOpen(true)}
      />
      <Hero />
      <MarqueeBar />
      
      <main>
        <ProductList key={refreshKey} />
        <Portfolio />
        <Proceso />
        <StatsBar />
        <Testimonials />
        <CTASection />
      </main>

      <Footer />

      {isAdmin && (
        <AddProductModal 
          isOpen={isAddModalOpen} 
          onClose={() => setIsAddModalOpen(false)} 
          onSuccess={handleProductAdded}
        />
      )}

      <AdminLoginModal
        isOpen={isAdminLoginOpen}
        onClose={() => setIsAdminLoginOpen(false)}
        onSuccess={() => setIsAdminLoginOpen(false)}
      />
    </div>
  );
}

export default App;
