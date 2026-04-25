import React from 'react';

const categories = ['Papelería', 'Impresión', 'Internet', 'Fotocopias', 'Encuadernación'];

const CategoryStrip: React.FC = () => {
  const [active, setActive] = React.useState('Papelería');

  return (
    <div className="nav-strip">
      {categories.map((cat) => (
        <div
          key={cat}
          className={`strip-item ${active === cat ? 'active' : ''}`}
          onClick={() => setActive(cat)}
        >
          {cat}
        </div>
      ))}
    </div>
  );
};

export default CategoryStrip;
