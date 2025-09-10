
import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                    <div className="relative">
                        <img 
                            className="rounded-lg shadow-2xl w-full" 
                            src="https://picsum.photos/id/1080/600/400" 
                            alt="Plato de comida del restaurante"
                        />
                    </div>
                    <div className="mt-10 lg:mt-0">
                        <h2 className="text-4xl font-anton uppercase text-brand-yellow">
                            Nuestra Pasión por el Sabor
                        </h2>
                        <p className="mt-4 text-lg text-gray-300">
                            En Alifast, no solo servimos comida, creamos experiencias. Nuestra especialidad son las alitas, marinadas a la perfección y cubiertas con nuestras salsas secretas que van desde un toque picante hasta un fuego que solo los valientes se atreven a probar.
                        </p>
                        <p className="mt-4 text-lg text-gray-300">
                            Además de nuestras famosas alitas, ofrecemos clásicos de la comida rápida como salchipapas generosas y un pollo broaster irresistiblemente crujiente. Cada plato se prepara con ingredientes frescos y de la más alta calidad, porque tu satisfacción es nuestro principal ingrediente.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
