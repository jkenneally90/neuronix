import React from 'react';

const HeroSection = () => (
  <section id="hero" className="bg-white p-12 text-center flex flex-col items-center justify-center" aria-label="Hero Section">
    <div className="max-w-2xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Welcome to AI Agent Marketplace</h1>
      <p className="text-lg md:text-xl mb-8">Find and integrate the best AI agents for your needs.</p>
      <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition duration-300">
        Get Started
      </button>
    </div>
    <div className="mt-8">
      <img src="/path/to/your/hero-image.png" alt="Hero Image" className="w-full h-auto rounded shadow-lg" />
    </div>
  </section>
);

export default HeroSection;
