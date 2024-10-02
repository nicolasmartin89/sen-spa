import React from 'react';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import BenefitsSection from '../components/BenefitsSection';
import ServicesSection from '../components/ServicesSection';

const Home = () => {
    return (
        <>
            <Hero />
            <InfoSection />
            <BenefitsSection />
            <ServicesSection />
        </>
    );
};

export default Home;
