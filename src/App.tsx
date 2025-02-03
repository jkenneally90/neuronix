import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ProductOverview from './components/ProductOverview';
import PricingSection from './components/PricingSection';
import ResourcesSection from './components/ResourcesSection';
import ContactSection from './components/ContactSection';

// Import Solutions pages
import SolutionsPage from './pages/SolutionsPage';
import CodeCompletionPage from './pages/solutions/CodeCompletionPage';
import CodeGenerationPage from './pages/solutions/CodeGenerationPage';
import DebuggingAssistantPage from './pages/solutions/DebuggingAssistantPage';
import NaturalLanguageCodePage from './pages/solutions/NaturalLanguageCodePage';

const HomePage = () => (
  <div className="bg-neutral-50">
    <HeroSection />
    <FeaturesSection />
    <ProductOverview />
    <PricingSection />
    <ResourcesSection />
    <ContactSection />
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-50 text-neutral-800 font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/code-completion" element={<CodeCompletionPage />} />
          <Route path="/solutions/code-generation" element={<CodeGenerationPage />} />
          <Route path="/solutions/debugging-assistant" element={<DebuggingAssistantPage />} />
          <Route path="/solutions/natural-language-code" element={<NaturalLanguageCodePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;