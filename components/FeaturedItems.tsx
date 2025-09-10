
import React from 'react';

interface FeaturedItemCardProps {
    imageUrl: string;
    title: string;
    description: string;
}

const FeaturedItemCard: React.FC<FeaturedItemCardProps> = ({ imageUrl, title, description }) => (
    <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-brand-red/40 transition-shadow duration-300 transform hover:-translate-y-2">
        <img className="w-full h-56 object-cover" src={imageUrl} alt={title} />
        <div className="p-6">
            <h3 className="text-2xl font-bold font-anton text-brand-orange">{title}</h3>
            <p className="mt-2 text-gray-400">{description}</p>
        </div>
    </div>
);

const FeaturedItems: React.FC = () => {
    const items = [
        {
            imageUrl: "https://picsum.photos/id/23/500/300",
            title: "Alitas Calientes",
            description: "Nuestra especialidad. Crujientes, jugosas y bañadas en tu salsa favorita. ¡Una explosión de sabor en cada bocado!"
        },
        {
            imageUrl: "https://picsum.photos/id/30/500/300",
            title: "Salchipapas Supremas",
            description: "Papas fritas doradas, salchichas de primera y salsas caseras. La combinación perfecta para calmar cualquier antojo."
        },
        {
            imageUrl: "https://picsum.photos/id/40/500/300",
            title: "Pollo Broaster",
            description: "Un clásico que nunca falla. Pollo tierno por dentro, con una cubierta extra crujiente que te hará volver por más."
        },
    ];

    return (
        <section id="menu" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl font-anton uppercase text-white">Nuestros Favoritos</h2>
                    <p className="mt-2 text-lg text-gray-400">Lo que nuestros clientes no pueden dejar de pedir.</p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {items.map(item => <FeaturedItemCard key={item.title} {...item} />)}
                </div>
            </div>
        </section>
    );
};

export default FeaturedItems;
