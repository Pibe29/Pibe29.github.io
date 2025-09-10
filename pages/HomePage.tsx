import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedItems from '../components/FeaturedItems';
import CTASection from '../components/CTASection';

interface HomePageProps {
    onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
    return (
        <>
            <Hero onNavigate={onNavigate} />
            <About />
            <FeaturedItems />
            <CTASection onNavigate={onNavigate} />
        </>
    );
};

export default HomePage;