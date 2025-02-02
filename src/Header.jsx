import React from 'react';

const Header = () => (
  <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
    <img src="/path/to/your/logo.png" alt="Logo" className="h-12" />
    <nav className="hidden md:flex space-x-4">
      <a href="#features" className="hover:text-gray-300" aria-label="Features">Features</a>
      <a href="#testimonials" className="hover:text-gray-300" aria-label="Testimonials">Testimonials</a>
      <a href="#pricing" className="hover:text-gray-300" aria-label="Pricing">Pricing</a>
    </nav>
    <div className="flex space-x-4">
      <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition duration-300">
        Get Started
      </button>
      <button className="px-4 py-2 bg-transparent border-2 border-blue-500 text-blue-500 font-semibold rounded hover:bg-blue-500 hover:text-white transition duration-300">
        Login
      </button>
    </div>
    <div className="md:hidden">
      {/* Add mobile menu button here */}
    </div>
  </header>
);

export default Header;
