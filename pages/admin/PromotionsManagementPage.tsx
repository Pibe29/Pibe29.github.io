import React, { useState } from 'react';
import { promotionsData as initialPromotionsData } from '../../data/promotionsData';
import type { Promotion } from '../../types';
import AdminModal from '../../components/admin/AdminModal';

const PromotionsManagementPage: React.FC = () => {
    const [promotions, setPromotions] = useState<Promotion[]>(initialPromotionsData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState<Promotion | null>(null);

    const handleEdit = (item: Promotion) => {
        setCurrentItem(item);
        setIsModalOpen(true);
    };

    const handleAddNew = () => {
        setCurrentItem(null);
        setIsModalOpen(true);
    };

    const handleDelete = (id: string) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar esta promoción?')) {
            setPromotions(promotions.filter(item => item.id !== id));
        }
    };
    
    const handleSave = (item: Promotion) => {
        const newId = item.id || `promo-${Date.now()}`;
        const itemWithId = { ...item, id: newId };
        
        if (currentItem) {
            setPromotions(promotions.map(i => i.id === currentItem.id ? itemWithId : i));
        } else {
            setPromotions([...promotions, itemWithId]);
        }
        setIsModalOpen(false);
    };

    return (
         <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-anton text-brand-yellow">Gestión de Promociones</h1>
                <button onClick={handleAddNew} className="px-4 py-2 bg-brand-orange hover:bg-orange-700 text-white font-bold rounded-md">
                    + Agregar Nueva
                </button>
            </div>
             <div className="bg-zinc-800 shadow-lg rounded-lg overflow-hidden">
                <table className="min-w-full">
                    <thead className="bg-zinc-700">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Título</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Descuento</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Fecha Fin</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-700">
                        {promotions.map(item => (
                            <tr key={item.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.title}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.discount || 'N/A'}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.endDate ? new Date(item.endDate).toLocaleDateString() : 'Permanente'}</td>
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
                <PromotionFormModal
                    item={currentItem}
                    onClose={() => setIsModalOpen(false)}
                    onSave={handleSave}
                />
            )}
        </div>
    );
};

const PromotionFormModal: React.FC<{item: Promotion | null; onClose: () => void; onSave: (item: Promotion) => void;}> = ({ item, onClose, onSave }) => {
    const [formData, setFormData] = useState<Partial<Promotion>>(item || { title: '', description: '', imageUrl: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData as Promotion);
    };

    return (
        <AdminModal isOpen={true} onClose={onClose} title={item ? 'Editar Promoción' : 'Agregar Promoción'}>
             <form onSubmit={handleSubmit} className="space-y-4">
                <input name="title" value={formData.title || ''} onChange={handleChange} placeholder="Título de la promoción" required className="w-full p-2 bg-zinc-700 rounded" />
                <textarea name="description" value={formData.description || ''} onChange={handleChange} placeholder="Descripción" required className="w-full p-2 bg-zinc-700 rounded" />
                <input name="discount" value={formData.discount || ''} onChange={handleChange} placeholder="Texto de descuento (e.g., 20% OFF)" className="w-full p-2 bg-zinc-700 rounded" />
                <input name="endDate" type="date" value={formData.endDate ? formData.endDate.split('T')[0] : ''} onChange={handleChange} placeholder="Fecha de finalización" className="w-full p-2 bg-zinc-700 rounded" />
                <input name="imageUrl" value={formData.imageUrl || ''} onChange={handleChange} placeholder="URL de la imagen" required className="w-full p-2 bg-zinc-700 rounded" />
                <div className="flex justify-end gap-4 pt-4">
                    <button type="button" onClick={onClose} className="px-4 py-2 bg-zinc-600 rounded">Cancelar</button>
                    <button type="submit" className="px-4 py-2 bg-brand-red rounded">Guardar</button>
                </div>
             </form>
        </AdminModal>
    )
}

export default PromotionsManagementPage;
