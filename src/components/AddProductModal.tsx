import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const AddProductModal: React.FC<AddProductModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Sublimación',
    tag: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from('products')
      .insert([
        {
          name: formData.name,
          description: formData.description,
          price: parseFloat(formData.price),
          category: formData.category,
          tag: formData.tag || null
        }
      ]);

    setLoading(false);
    if (error) {
      alert('Error al publicar servicio: ' + error.message);
    } else {
      onSuccess();
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '28px', fontWeight: 700, letterSpacing: '-1px' }}>Cotizar / Publicar</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="form-group">
            <label>Nombre del Servicio / Producto</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Descripción detallada</label>
            <textarea
              required
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>
          <div className="action-row">
            <div className="form-group" style={{ flex: 1 }}>
              <label>Precio Base</label>
              <input
                type="number"
                required
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label>Categoría</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              >
                <option>Sublimación</option>
                <option>Estampados</option>
                <option>Impresión</option>
                <option>Papelería</option>
                <option>Otros</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Etiqueta especial</label>
            <input
              type="text"
              placeholder="Ej: Nuevo, Express"
              value={formData.tag}
              onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
            />
          </div>
          <div className="action-row" style={{ marginTop: '1rem' }}>
            <button type="button" className="btn-link" onClick={onClose}>Cancelar</button>
            <button type="submit" className="btn-fill" style={{ flex: 1 }} disabled={loading}>
              {loading ? 'Publicando...' : 'Publicar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
