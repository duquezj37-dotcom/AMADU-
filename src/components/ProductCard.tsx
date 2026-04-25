import React from 'react';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  tag?: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  return (
    <div className="srv">
      <div className="srv-num">0{index + 1}</div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="srv-items">
        <div className="srv-item">Precio: ${product.price.toLocaleString()}</div>
        <div className="srv-item">{product.category}</div>
        {product.tag && <div className="srv-item">{product.tag}</div>}
      </div>
      <div style={{ marginTop: '1.5rem', display: 'flex', gap: '10px' }}>
        <button className="btn-fill" style={{ padding: '8px 16px', fontSize: '10px' }}>Comprar</button>
      </div>
    </div>
  );
};

export default ProductCard;
