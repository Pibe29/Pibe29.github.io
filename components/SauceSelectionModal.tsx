import React, { useState } from 'react';
import type { Product } from '../types';
import { sauceData } from '../data/menuData';

interface SauceSelectionModalProps {
    product: Product;
    onClose: () => void;
    onConfirm: (product: Product, sauces: string[]) => void;
}

const SauceSelectionModal: React.FC<SauceSelectionModalProps> = ({ product, onClose, onConfirm }) => {
    const [selectedSauces, setSelectedSauces] = useState<string[]>([]);
    const maxSauces = product.maxSauces || 1;

    const sauceCategories: Record<string, Product[]> = {
        'Dulce': sauceData.filter(s => s.subCategory === 'Dulce'),
        'Salado': sauceData.filter(s => s.subCategory === 'Salado'),
        'Picante': sauceData.filter(s => s.subCategory === 'Picante'),
        'Agridulce': sauceData.filter(s => s.subCategory === 'Agridulce'),
    };

    const handleSauceToggle = (sauceName: string) => {
        setSelectedSauces(prev => {
            if (prev.includes(sauceName)) {
                return prev.filter(s => s !== sauceName);
            }
            if (prev.length < maxSauces) {
                return [...prev, sauceName];
            }
            return prev;
        });
    };

    return (
        <div 
            className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-4" 
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="sauce-modal-title"
        >
            <div 
                className="bg-zinc-800 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" 
                onClick={e => e.stopPropagation()}
            >
                <div className="p-6 sticky top-0 bg-zinc-800 z-10 border-b border-zinc-700 mb-4">
                    <h2 id="sauce-modal-title" className="text-2xl font-anton text-brand-yellow mb-1">
                        Elige hasta {maxSauces} sabor(es)
                        <span className="text-lg text-gray-300 ml-2">({selectedSauces.length}/{maxSauces})</span>
                    </h2>
                    <p className="text-gray-300">para tus <span className="font-semibold">{product.name}</span></p>
                </div>

                <div className="px-6 pb-6">
                    <div className="space-y-6">
                        {Object.entries(sauceCategories).map(([category, sauces]) => (
                            sauces.length > 0 && (
                                <div key={category}>
                                    <h3 className="font-bold text-brand-orange text-lg mb-3 border-b border-zinc-700 pb-2">{category}</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {sauces.map(sauce => {
                                            const isChecked = selectedSauces.includes(sauce.name);
                                            const isDisabled = !isChecked && selectedSauces.length >= maxSauces;
                                            return (
                                                <label 
                                                    key={sauce.id}
                                                    className={`p-3 rounded-lg text-left transition-colors duration-200 flex items-center gap-3 ${isDisabled ? 'bg-zinc-700/50 cursor-not-allowed' : 'bg-zinc-700 hover:bg-zinc-600 cursor-pointer'}`}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={isChecked}
                                                        disabled={isDisabled}
                                                        onChange={() => handleSauceToggle(sauce.name)}
                                                        className="h-5 w-5 bg-zinc-900 rounded border-zinc-600 text-brand-orange focus:ring-brand-orange focus:ring-2 disabled:opacity-50"
                                                    />
                                                    <div>
                                                        <p className={`font-semibold ${isDisabled ? 'text-gray-500' : 'text-white'}`}>{sauce.name}</p>
                                                        <p className={`text-sm ${isDisabled ? 'text-gray-600' : 'text-gray-400'}`}>{sauce.description}</p>
                                                    </div>
                                                </label>
                                            );
                                        })}
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </div>

                <div className="mt-4 p-6 border-t border-zinc-700 flex justify-end gap-4 sticky bottom-0 bg-zinc-800 z-10">
                    <button 
                        onClick={onClose} 
                        className="px-6 py-2 bg-zinc-600 hover:bg-zinc-500 text-white font-bold rounded-md transition-colors"
                    >
                        Cancelar
                    </button>
                    <button 
                        onClick={() => onConfirm(product, selectedSauces)}
                        disabled={selectedSauces.length === 0}
                        className="px-6 py-2 bg-brand-red hover:bg-red-700 text-white font-bold rounded-md transition-colors disabled:bg-red-900 disabled:cursor-not-allowed"
                    >
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SauceSelectionModal;