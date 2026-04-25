import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import ProductCard from './ProductCard';
import type { Product } from './ProductCard';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching products:', error);
    } else {
      setProducts(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Cargando servicios...</div>;
  }

  return (
    <section className="servicios-section" id="servicios">
      <div className="section-tag">Servicios</div>
      <div className="servicios-grid">
        {products.length > 0 ? (
          products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))
        ) : (
          <div style={{ padding: '2rem', textAlign: 'center', gridColumn: '1 / -1' }}>
            No hay servicios publicados.
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;
