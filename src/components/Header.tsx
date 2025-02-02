import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              className="h-8 w-auto"
              src="/logo.svg"
              alt="Neuronix"
            />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {['Products', 'Solutions', 'Resources', 'Pricing'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isScrolled ? 'text-gray-900 hover:text-primary-600' : 'text-white hover:text-primary-200'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 hover:text-primary-600">
              Sign In
            </button>
            <button className="px-4 py-2 text-sm font-medium bg-primary-600 text-white rounded-lg shadow-md hover:bg-primary-700 transition-colors duration-200">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            {['Products', 'Solutions', 'Resources', 'Pricing'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-primary-600 hover:bg-gray-50 rounded-md"
              >
                {item}
              </a>
            ))}
            <div className="mt-4 space-y-2">
              <button className="w-full px-4 py-2 text-base font-medium text-gray-900 hover:text-primary-600">
                Sign In
              </button>
              <button className="w-full px-4 py-2 text-base font-medium bg-primary-600 text-white rounded-lg shadow-md hover:bg-primary-700">
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;