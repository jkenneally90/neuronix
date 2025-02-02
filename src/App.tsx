import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ProductOverview from './components/ProductOverview';
import PricingSection from './components/PricingSection';
import ResourcesSection from './components/ResourcesSection';
import ContactSection from './components/ContactSection';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProductOverview />
      <PricingSection />
      <ResourcesSection />
      <ContactSection />
    </div>
  );
};

export default App;