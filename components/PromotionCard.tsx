import React from 'react';
import type { Promotion } from '../types';
import CountdownTimer from './CountdownTimer';

interface PromotionCardProps {
    promotion: Promotion;
}

const PromotionCard: React.FC<PromotionCardProps> = ({ promotion }) => {
    return (
        <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-xl hover:shadow-brand-yellow/30 transition-shadow duration-300 flex flex-col md:flex-row">
            <div className="md:w-1/2">
                <img className="w-full h-64 md:h-full object-cover" src={promotion.imageUrl} alt={promotion.title} />
            </div>
            <div className="p-6 md:w-1/2 flex flex-col justify-between">
                <div>
                    {promotion.endDate && <CountdownTimer targetDate={promotion.endDate} />}
                    <h3 className="text-3xl font-bold font-anton text-brand-yellow">{promotion.title}</h3>
                    <p className="mt-3 text-gray-300">{promotion.description}</p>
                </div>
                <div className="mt-6">
                    {promotion.discount && (
                         <p className="text-lg font-bold text-white bg-brand-red inline-block px-4 py-2 rounded-md">
                            {promotion.discount}
                         </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PromotionCard;
