import React from 'react';

interface CTASectionProps {
    onNavigate: (page: string) => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onNavigate }) => {
    return (
        <section className="bg-brand-red">
            <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-anton uppercase tracking-wide text-white sm:text-5xl">
                    <span className="block">¿Listo para el Sabor?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-red-100">
                    No esperes más para probar las mejores alitas y la comida más deliciosa de la ciudad.
                </p>
                <button
                    onClick={() => onNavigate('pedidos')}
                    className="mt-8 w-full inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-full shadow-sm text-base font-bold text-brand-red bg-white hover:bg-red-50 sm:w-auto text-lg transition-transform duration-300 transform hover:scale-105"
                >
                    ¡Haz tu Pedido Ahora!
                </button>
            </div>
        </section>
    );
};

export default CTASection;