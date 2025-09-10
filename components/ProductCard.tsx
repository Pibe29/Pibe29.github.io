import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
    return (
        <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-brand-orange/30 transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
            <img className="w-full h-56 object-cover" src={product.imageUrl} alt={product.name} />
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold font-anton text-brand-orange">{product.name}</h3>
                <p className="mt-2 text-gray-400 flex-grow">{product.description}</p>
                <div className="mt-4 flex justify-between items-center">
                    <span className="text-2xl font-bold text-brand-yellow">${product.price.toFixed(2)}</span>
                    <button 
                        onClick={() => onAddToCart(product)}
                        className="px-5 py-2 bg-brand-red hover:bg-red-700 text-white font-bold rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105"
                    >
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
