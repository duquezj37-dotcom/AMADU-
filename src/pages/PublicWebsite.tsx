import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MarqueeBar from '../components/MarqueeBar';
import ProductList from '../components/ProductList';
import Portfolio from '../components/Portfolio';
import Proceso from '../components/Proceso';
import StatsBar from '../components/StatsBar';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const PublicWebsite: React.FC = () => {
  return (
    <div className="site">
      <Navbar 
        onContactClick={() => {
          window.location.href = 'mailto:duquezj37@gmail.com';
        }} 
      />
      <Hero />
      <MarqueeBar />
      
      <main>
        <ProductList />
        <Portfolio />
        <Proceso />
        <StatsBar />
        <Testimonials />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default PublicWebsite;
