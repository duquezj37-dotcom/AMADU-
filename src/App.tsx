import { useState } from 'react';
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

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleProductAdded = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="site">
      <Navbar onContactClick={() => setIsModalOpen(true)} />
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

      <AddProductModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={handleProductAdded}
      />
    </div>
  );
}

export default App;
