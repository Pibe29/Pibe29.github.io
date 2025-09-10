import React, { useState } from 'react';
import { menuData } from '../data/menuData';
import ProductCard from '../components/ProductCard';
import type { Product } from '../types';

interface MenuPageProps {
    onAddToCart: (product: Product) => void;
}

const MenuPage: React.FC<MenuPageProps> = ({ onAddToCart }) => {
    const [selectedCategory, setSelectedCategory] = useState('Todos');
    const mainCategories = ['Alitas', 'Broaster', 'Salchipapas', 'Agregados', 'Bebidas'];
    const filterCategories = ['Todos', ...mainCategories];

    const itemsToDisplay = selectedCategory === 'Todos'
        ? menuData.filter(item => mainCategories.includes(item.category))
        : menuData.filter(item => item.category === selectedCategory);

    const groupedMenu = itemsToDisplay.reduce((acc, item) => {
        const category = item.category;
        if (!acc[category]) {
            acc[category] = {};
        }
        const subCategory = item.subCategory || 'General';
        if (!acc[category][subCategory]) {
            acc[category][subCategory] = [];
        }
        acc[category][subCategory].push(item);
        return acc;
    }, {} as Record<string, Record<string, Product[]>>);

    const categoriesToRender = selectedCategory === 'Todos' 
        ? mainCategories 
        : [selectedCategory];

    return (
        <div className="py-12 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-anton uppercase text-white">Nuestro Menú</h1>
                    <p className="mt-2 text-lg text-gray-400">Desde nuestras famosas alitas hasta platos que te sorprenderán.</p>
                </div>

                <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-16">
                    {filterCategories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 sm:px-6 py-2 font-bold rounded-full transition-colors duration-300 text-sm sm:text-base ${
                                selectedCategory === category
                                    ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/30'
                                    : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="space-y-16">
                    {categoriesToRender.map(category => (
                        groupedMenu[category] && (
                            <section key={category} aria-labelledby={`category-header-${category}`}>
                                <h2 id={`category-header-${category}`} className="text-3xl sm:text-4xl font-anton uppercase text-brand-orange mb-8 border-b-2 border-brand-orange/30 pb-4">{category}</h2>
                                <div className="space-y-12">
                                    {Object.entries(groupedMenu[category]).map(([subCategory, items]) => (
                                        <div key={subCategory}>
                                            {subCategory !== 'General' && <h3 className="text-2xl font-bold text-brand-yellow mb-6">{subCategory}</h3>}
                                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                                {items.map(item => (
                                                    <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} />
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MenuPage;