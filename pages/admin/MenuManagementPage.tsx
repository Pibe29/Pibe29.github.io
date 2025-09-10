import React, { useState } from 'react';
import { menuData as initialMenuData } from '../../data/menuData';
import type { Product } from '../../types';
import AdminModal from '../../components/admin/AdminModal';

const MenuManagementPage: React.FC = () => {
    const [menuItems, setMenuItems] = useState<Product[]>(initialMenuData.filter(item => item.category !== 'Sabor de Alitas'));
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState<Product | null>(null);

    const handleEdit = (item: Product) => {
        setCurrentItem(item);
        setIsModalOpen(true);
    };

    const handleAddNew = () => {
        setCurrentItem(null); // No item selected means it's a new one
        setIsModalOpen(true);
    };

    const handleDelete = (id: string) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar este item?')) {
            setMenuItems(menuItems.filter(item => item.id !== id));
        }
    };

    const handleSave = (item: Product) => {
        // In a real app, you would generate a unique ID
        const newId = item.id || `new-${Date.now()}`;
        const itemWithId = { ...item, id: newId };
        
        if (currentItem) { // Editing
            setMenuItems(menuItems.map(i => i.id === currentItem.id ? itemWithId : i));
        } else { // Adding new
            setMenuItems([...menuItems, itemWithId]);
        }
        setIsModalOpen(false);
    };
    
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-anton text-brand-yellow">Gestión de Menú</h1>
                <button onClick={handleAddNew} className="px-4 py-2 bg-brand-orange hover:bg-orange-700 text-white font-bold rounded-md">
                    + Agregar Nuevo
                </button>
            </div>
            <div className="bg-zinc-800 shadow-lg rounded-lg overflow-hidden">
                <table className="min-w-full">
                    <thead className="bg-zinc-700">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Nombre</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Categoría</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Precio</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-700">
                        {menuItems.map(item => (
                            <tr key={item.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.category}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-yellow font-semibold">S/{item.price.toFixed(2)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button onClick={() => handleEdit(item)} className="text-blue-400 hover:text-blue-300 mr-4">Editar</button>
                                    <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:text-red-400">Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {isModalOpen && (
                <ItemFormModal 
                    item={currentItem}
                    onClose={() => setIsModalOpen(false)}
                    onSave={handleSave}
                />
            )}
        </div>
    );
};

// Sub-component for the form modal
const ItemFormModal: React.FC<{item: Product | null; onClose: () => void; onSave: (item: Product) => void;}> = ({ item, onClose, onSave }) => {
    const [formData, setFormData] = useState<Partial<Product>>(item || { name: '', description: '', price: 0, category: 'Alitas', imageUrl: '', subCategory: '', requiresSauce: false, maxSauces: 0 });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const { checked } = e.target as HTMLInputElement;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: (name === 'price' || name === 'maxSauces') ? parseFloat(value) : value }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData as Product);
    };

    return (
        <AdminModal isOpen={true} onClose={onClose} title={item ? 'Editar Item' : 'Agregar Nuevo Item'}>
             <form onSubmit={handleSubmit} className="space-y-4">
                <input name="name" value={formData.name || ''} onChange={handleChange} placeholder="Nombre del producto" required className="w-full p-2 bg-zinc-700 rounded" />
                <textarea name="description" value={formData.description || ''} onChange={handleChange} placeholder="Descripción" required className="w-full p-2 bg-zinc-700 rounded" />
                <input name="price" type="number" step="0.01" value={formData.price || 0} onChange={handleChange} placeholder="Precio" required className="w-full p-2 bg-zinc-700 rounded" />
                <select name="category" value={formData.category} onChange={handleChange} className="w-full p-2 bg-zinc-700 rounded">
                    <option>Alitas</option>
                    <option>Broaster</option>
                    <option>Salchipapas</option>
                    <option>Agregados</option>
                    <option>Bebidas</option>
                </select>
                <input name="subCategory" value={formData.subCategory || ''} onChange={handleChange} placeholder="Sub-categoría (e.g., Porciones personales)" className="w-full p-2 bg-zinc-700 rounded" />
                <input name="imageUrl" value={formData.imageUrl || ''} onChange={handleChange} placeholder="URL de la imagen" required className="w-full p-2 bg-zinc-700 rounded" />
                <div className="flex items-center gap-2 pt-2">
                    <input name="requiresSauce" type="checkbox" checked={formData.requiresSauce || false} onChange={handleChange} id="requiresSauce" className="h-4 w-4 bg-zinc-700 rounded border-zinc-600 text-brand-orange focus:ring-brand-orange" />
                    <label htmlFor="requiresSauce" className="text-sm text-gray-300">Requiere selección de salsa</label>
                </div>
                 {formData.requiresSauce && (
                    <input name="maxSauces" type="number" step="1" value={formData.maxSauces || 1} onChange={handleChange} placeholder="Máximo de salsas" className="w-full p-2 bg-zinc-700 rounded" />
                 )}
                <div className="flex justify-end gap-4 pt-4">
                    <button type="button" onClick={onClose} className="px-4 py-2 bg-zinc-600 rounded">Cancelar</button>
                    <button type="submit" className="px-4 py-2 bg-brand-red rounded">Guardar</button>
                </div>
             </form>
        </AdminModal>
    )
}

export default MenuManagementPage;