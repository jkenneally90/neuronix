import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import HeroSection from './HeroSection';
import ContentSection from './ContentSection';
import Footer from './Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <HeroSection />
          <ContentSection title="Features" description="Explore the powerful features of our AI agents." />
          <ContentSection title="Customer Testimonials" description="What our customers have to say about our AI agents." />
          <ContentSection title="Pricing" description="Find out how our pricing models fit your needs." />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
