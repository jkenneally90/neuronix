import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
>>>>>>> 08da6dc (Enhance Solutions page with interactive design, detailed solution previews, and improved user experience)

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

<<<<<<< HEAD
  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
=======
  const navItems = [
    { name: 'Products', link: '/#products' },
    { name: 'Solutions', link: '/solutions' },
    { name: 'Resources', link: '/#resources' },
    { name: 'Pricing', link: '/#pricing' }
  ];

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-soft border-b border-neutral-100' 
          : 'bg-transparent'
>>>>>>> 08da6dc (Enhance Solutions page with interactive design, detailed solution previews, and improved user experience)
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
<<<<<<< HEAD
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
=======
            <Link to="/">
              <img
                className="h-10 w-auto"
                src="/logo.svg"
                alt="Neuronix"
              />
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className={`text-sm font-medium transition-colors duration-300 
                  ${isScrolled 
                    ? 'text-neutral-700 hover:text-primary-600' 
                    : 'text-neutral-100 hover:text-white'
                  }`}
              >
                {item.name}
              </Link>
>>>>>>> 08da6dc (Enhance Solutions page with interactive design, detailed solution previews, and improved user experience)
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
<<<<<<< HEAD
            <button className="px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 hover:text-primary-600">
              Sign In
            </button>
            <button className="px-4 py-2 text-sm font-medium bg-primary-600 text-white rounded-lg shadow-md hover:bg-primary-700 transition-colors duration-200">
=======
            <button className="btn btn-secondary px-4 py-2 text-sm">
              Sign In
            </button>
            <button className="btn btn-primary px-4 py-2 text-sm">
>>>>>>> 08da6dc (Enhance Solutions page with interactive design, detailed solution previews, and improved user experience)
              Get Started
            </button>
          </div>

<<<<<<< HEAD
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
=======
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-500 hover:text-neutral-600 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute left-0 right-0 top-full bg-white shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  className="block px-3 py-2 text-base font-medium 
                    text-neutral-700 hover:bg-neutral-100 rounded-md"
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 space-y-2 px-3">
                <button className="btn btn-secondary w-full py-2 mb-2">
                  Sign In
                </button>
                <button className="btn btn-primary w-full py-2">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
>>>>>>> 08da6dc (Enhance Solutions page with interactive design, detailed solution previews, and improved user experience)
    </motion.header>
  );
};

export default Header;