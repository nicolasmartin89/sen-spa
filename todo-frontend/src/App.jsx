import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import BenefitsSection from './components/BenefitsSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <InfoSection />
      <BenefitsSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default App;