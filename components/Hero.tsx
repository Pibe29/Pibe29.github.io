import React from 'react';

interface HeroProps {
    onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
    return (
        <section className="relative h-[calc(100vh-80px)] min-h-[500px] bg-hero-wings bg-cover bg-center">
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-anton uppercase tracking-widest text-shadow-lg">
                    El Sabor que <span className="text-brand-orange">Enciende</span> Tu Mundo
                </h1>
                <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-300">
                    Las alitas más crujientes y sabrosas, preparadas para conquistar tu paladar.
                </p>
                <div className="mt-10">
                    <button 
                        onClick={() => onNavigate('menu')}
                        className="px-8 py-4 bg-brand-orange hover:bg-orange-700 text-white text-lg font-bold rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 shadow-lg"
                    >
                        Explora el Menú
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;