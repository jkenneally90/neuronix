<<<<<<< HEAD
import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button 
        className="lg:hidden p-4 text-white bg-gray-800"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        ☰
      </button>
      <nav className={`bg-gray-900 p-4 sticky top-0 h-full w-64 ${isOpen ? 'block' : 'hidden'} lg:block`}>
        <ul className="flex flex-col space-y-4 text-white">
          <li><a href="#features" className="hover:text-gray-300" aria-label="Features">Features</a></li>
          <li><a href="#testimonials" className="hover:text-gray-300" aria-label="Testimonials">Testimonials</a></li>
          <li><a href="#pricing" className="hover:text-gray-300" aria-label="Pricing">Pricing</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
=======
import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button 
        className="lg:hidden p-4 text-white bg-gray-800"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        ☰
      </button>
      <nav className={`bg-gray-900 p-4 sticky top-0 h-full w-64 ${isOpen ? 'block' : 'hidden'} lg:block`}>
        <ul className="flex flex-col space-y-4 text-white">
          <li><a href="#features" className="hover:text-gray-300" aria-label="Features">Features</a></li>
          <li><a href="#testimonials" className="hover:text-gray-300" aria-label="Testimonials">Testimonials</a></li>
          <li><a href="#pricing" className="hover:text-gray-300" aria-label="Pricing">Pricing</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
>>>>>>> 775ae29e00870c8e53cf513bd7720754fbf90db1
