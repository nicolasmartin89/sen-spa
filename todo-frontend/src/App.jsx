import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import BenefitsSection from './components/BenefitsSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Hero />
        <InfoSection />
        <BenefitsSection />
        <ServicesSection />
        <Footer />
      </div>
    </Router>
  );
};

export default App;