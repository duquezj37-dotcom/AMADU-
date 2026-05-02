import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import { Trash2, Plus } from 'lucide-react';

interface Category {
  id: string;
  name: string;
}

const CategoriesManager: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [adding, setAdding] = useState(false);

  const fetchCategories = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('categories').select('*').order('name');
    if (!error && data) {
      setCategories(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCategoryName.trim()) return;
    setAdding(true);
    
    const { error } = await supabase.from('categories').insert([{ name: newCategoryName.trim() }]);
    
    if (error) {
      alert('Error al crear categoría: ' + error.message);
    } else {
      setNewCategoryName('');
      fetchCategories();
    }
    setAdding(false);
  };

  const handleDelete = async (id: string, name: string) => {
    if (!window.confirm(`¿Estás seguro de eliminar la categoría "${name}"?`)) return;
    
    const { error } = await supabase.from('categories').delete().eq('id', id);
    if (error) {
      alert('Error al eliminar: ' + error.message);
    } else {
      fetchCategories();
    }
  };

  return (
    <div style={{ maxWidth: '800px' }}>
      <div style={{ background: '#FFF', padding: '2rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '1.5rem', color: '#111827' }}>Añadir Nueva Categoría</h2>
        <form onSubmit={handleAdd} style={{ display: 'flex', gap: '1rem' }}>
          <input
            type="text"
            required
            placeholder="Ej. Cuadros personalizados"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            style={{ flex: 1, padding: '10px 14px', border: '1px solid #D1D5DB', borderRadius: '6px', fontSize: '14px' }}
          />
          <button 
            type="submit" 
            disabled={adding}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--ink)', color: '#FFF', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px', fontWeight: 500 }}
          >
            <Plus size={16} />
            {adding ? 'Agregando...' : 'Agregar'}
          </button>
        </form>
      </div>

      <div style={{ background: '#FFF', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead style={{ background: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>
            <tr>
              <th style={{ padding: '12px 24px', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Nombre de Categoría</th>
              <th style={{ padding: '12px 24px', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase', width: '100px' }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={2} style={{ padding: '24px', textAlign: 'center', color: '#6B7280' }}>Cargando...</td></tr>
            ) : categories.length === 0 ? (
              <tr><td colSpan={2} style={{ padding: '24px', textAlign: 'center', color: '#6B7280' }}>No hay categorías registradas.</td></tr>
            ) : (
              categories.map(cat => (
                <tr key={cat.id} style={{ borderBottom: '1px solid #E5E7EB' }}>
                  <td style={{ padding: '16px 24px', fontSize: '14px', color: '#111827' }}>{cat.name}</td>
                  <td style={{ padding: '16px 24px' }}>
                    <button onClick={() => handleDelete(cat.id, cat.name)} style={{ background: 'transparent', border: 'none', color: '#EF4444', cursor: 'pointer', padding: '4px' }}>
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

export default CategoriesManager;
