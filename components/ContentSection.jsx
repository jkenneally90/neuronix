<<<<<<< HEAD
import React from 'react';

const ContentSection = ({ title, description }) => (
  <section 
    id={title.toLowerCase().replace(/\s+/g, '-')} 
    className="bg-gray-100 p-12 md:p-16 lg:p-20"
    aria-labelledby={`${title.toLowerCase().replace(/\s+/g, '-')}-title`}
  >
    <h2 
      id={`${title.toLowerCase().replace(/\s+/g, '-')}-title`} 
      className="text-3xl md:text-4xl font-bold mb-6 transition duration-300 ease-in-out"
    >
      {title}
    </h2>
    <p className="text-lg md:text-xl transition duration-300 ease-in-out">{description}</p>
  </section>
);

export default ContentSection;
=======
import React from 'react';

const ContentSection = ({ title, description }) => (
  <section 
    id={title.toLowerCase().replace(/\s+/g, '-')} 
    className="bg-gray-100 p-12 md:p-16 lg:p-20"
    aria-labelledby={`${title.toLowerCase().replace(/\s+/g, '-')}-title`}
  >
    <h2 
      id={`${title.toLowerCase().replace(/\s+/g, '-')}-title`} 
      className="text-3xl md:text-4xl font-bold mb-6 transition duration-300 ease-in-out"
    >
      {title}
    </h2>
    <p className="text-lg md:text-xl transition duration-300 ease-in-out">{description}</p>
  </section>
);

export default ContentSection;
>>>>>>> 775ae29e00870c8e53cf513bd7720754fbf90db1
