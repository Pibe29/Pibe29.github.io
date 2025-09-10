import React, { useState } from 'react';
import { menuData } from '../data/menuData';
import ProductCard from '../components/ProductCard';
import type { Product } from '../types';

interface MenuPageProps {
    onAddToCart: (product: Product) => void;
}

const MenuPage: React.FC<MenuPageProps> = ({ onAddToCart }) => {
    const categories = ['Todos', ...Array.from(new Set(menuData.map(item => item.category)))];
    const [activeCategory, setActiveCategory] = useState('Todos');

    const filteredMenu = activeCategory === 'Todos'
        ? menuData
        : menuData.filter(item => item.category === activeCategory);

    return (
        <div className="py-12 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-anton uppercase text-white">Nuestro Menú</h1>
                    <p className="mt-2 text-lg text-gray-400">Desde nuestras famosas alitas hasta platos que te sorprenderán.</p>
                </div>

                <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-12">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 text-sm sm:px-6 sm:py-2 sm:text-base font-bold rounded-full transition-colors duration-300 ${
                                activeCategory === category
                                ? 'bg-brand-orange text-white'
                                : 'bg-zinc-700 text-gray-300 hover:bg-zinc-600'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredMenu.map(item => (
                        <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MenuPage;
