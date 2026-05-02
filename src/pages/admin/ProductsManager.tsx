import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import { Trash2, Plus, X } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  tag: string;
}

interface Category {
  id: string;
  name: string;
}

const ProductsManager: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [showAddForm, setShowAddForm] = useState(false);
  const [adding, setAdding] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    tag: ''
  });

  const fetchData = async () => {
    setLoading(true);
    const [prodRes, catRes] = await Promise.all([
      supabase.from('products').select('*').order('created_at', { ascending: false }),
      supabase.from('categories').select('*').order('name')
    ]);

    if (prodRes.data) setProducts(prodRes.data);
    if (catRes.data) {
      setCategories(catRes.data);
      if (catRes.data.length > 0 && !formData.category) {
        setFormData(prev => ({ ...prev, category: catRes.data[0].name }));
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: string, name: string) => {
    if (!window.confirm(`¿Seguro que deseas eliminar el producto "${name}"?`)) return;
    
    const { error } = await supabase.from('products').delete().eq('id', id);
    if (error) {
      alert('Error al eliminar: ' + error.message);
    } else {
      fetchData();
    }
  };

  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAdding(true);
    const { error } = await supabase.from('products').insert([{
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      category: formData.category,
      tag: formData.tag || null
    }]);

    setAdding(false);
    if (error) {
      alert('Error al crear producto: ' + error.message);
    } else {
      setShowAddForm(false);
      setFormData({ name: '', description: '', price: '', category: categories[0]?.name || '', tag: '' });
      fetchData();
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <p style={{ color: '#6B7280', fontSize: '14px' }}>Gestiona los servicios y productos de tu página pública.</p>
        {!showAddForm && (
          <button 
            onClick={() => setShowAddForm(true)}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--ink)', color: '#FFF', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: 500 }}
          >
            <Plus size={16} /> Nuevo Servicio
          </button>
        )}
      </div>

      {showAddForm && (
        <div style={{ background: '#FFF', padding: '2rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#111827' }}>Crear Nuevo Servicio</h2>
            <button onClick={() => setShowAddForm(false)} style={{ background: 'transparent', border: 'none', color: '#6B7280', cursor: 'pointer' }}>
              <X size={20} />
            </button>
          </div>
          <form onSubmit={handleAddSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '13px', fontWeight: 500, color: '#374151' }}>Nombre</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ padding: '10px', border: '1px solid #D1D5DB', borderRadius: '6px' }} />
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '13px', fontWeight: 500, color: '#374151' }}>Precio</label>
                <input required type="number" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} style={{ padding: '10px', border: '1px solid #D1D5DB', borderRadius: '6px' }} />
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '13px', fontWeight: 500, color: '#374151' }}>Categoría</label>
                <select required value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} style={{ padding: '10px', border: '1px solid #D1D5DB', borderRadius: '6px', background: '#FFF' }}>
                  {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                  {categories.length === 0 && <option value="">Sin categorías</option>}
                </select>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '13px', fontWeight: 500, color: '#374151' }}>Etiqueta (opcional)</label>
                <input type="text" placeholder="Ej: Nuevo, Express" value={formData.tag} onChange={e => setFormData({...formData, tag: e.target.value})} style={{ padding: '10px', border: '1px solid #D1D5DB', borderRadius: '6px' }} />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '13px', fontWeight: 500, color: '#374151' }}>Descripción</label>
              <textarea required rows={3} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} style={{ padding: '10px', border: '1px solid #D1D5DB', borderRadius: '6px', fontFamily: 'inherit' }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
              <button type="button" onClick={() => setShowAddForm(false)} style={{ background: 'transparent', border: '1px solid #D1D5DB', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 500 }}>Cancelar</button>
              <button type="submit" disabled={adding} style={{ background: 'var(--ink)', color: '#FFF', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 500 }}>
                {adding ? 'Guardando...' : 'Guardar Servicio'}
              </button>
            </div>
          </form>
        </div>
      )}

      <div style={{ background: '#FFF', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead style={{ background: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>
            <tr>
              <th style={{ padding: '12px 24px', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Servicio</th>
              <th style={{ padding: '12px 24px', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Categoría</th>
              <th style={{ padding: '12px 24px', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Precio</th>
              <th style={{ padding: '12px 24px', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase', width: '100px' }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={4} style={{ padding: '24px', textAlign: 'center', color: '#6B7280' }}>Cargando datos...</td></tr>
            ) : products.length === 0 ? (
              <tr><td colSpan={4} style={{ padding: '24px', textAlign: 'center', color: '#6B7280' }}>No hay servicios registrados.</td></tr>
            ) : (
              products.map(p => (
                <tr key={p.id} style={{ borderBottom: '1px solid #E5E7EB' }}>
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{ fontSize: '14px', fontWeight: 500, color: '#111827' }}>{p.name}</div>
                    <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '4px' }}>{p.description.length > 50 ? p.description.substring(0, 50) + '...' : p.description}</div>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <span style={{ display: 'inline-block', padding: '2px 8px', background: '#F3F4F6', color: '#374151', borderRadius: '12px', fontSize: '12px' }}>{p.category}</span>
                  </td>
                  <td style={{ padding: '16px 24px', fontSize: '14px', color: '#111827' }}>${p.price.toFixed(2)}</td>
                  <td style={{ padding: '16px 24px' }}>
                    <button onClick={() => handleDelete(p.id, p.name)} style={{ background: 'transparent', border: 'none', color: '#EF4444', cursor: 'pointer', padding: '4px' }}>
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsManager;
