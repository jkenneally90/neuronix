import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white p-4 flex flex-col md:flex-row justify-between items-center">
      <div>© {currentYear} AI Agent Marketplace. All rights reserved.</div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#features" className="hover:text-gray-300" aria-label="Features">Features</a></li>
          <li><a href="#testimonials" className="hover:text-gray-300" aria-label="Testimonials">Testimonials</a></li>
          <li><a href="#pricing" className="hover:text-gray-300" aria-label="Pricing">Pricing</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
