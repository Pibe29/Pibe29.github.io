import React from 'react';

interface PlaceholderPageProps {
    title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
    return (
        <div>
            <h1 className="text-3xl font-anton text-brand-yellow mb-6">{title}</h1>
            <div className="bg-zinc-800 p-8 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-semibold text-white">Página en Construcción</h2>
                <p className="mt-2 text-gray-400">Esta sección estará disponible próximamente.</p>
            </div>
        </div>
    );
};

export default PlaceholderPage;
