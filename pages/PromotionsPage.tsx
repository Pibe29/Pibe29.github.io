import React from 'react';
import { promotionsData } from '../data/promotionsData';
import PromotionCard from '../components/PromotionCard';

const PromotionsPage: React.FC = () => {
    return (
        <div className="py-12 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-anton uppercase text-white">Promociones Especiales</h1>
                    <p className="mt-2 text-lg text-gray-400">¡Aprovecha nuestras ofertas y combos por tiempo limitado!</p>
                </div>

                <div className="space-y-12">
                    {promotionsData.map(promo => (
                        <PromotionCard key={promo.id} promotion={promo} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PromotionsPage;
