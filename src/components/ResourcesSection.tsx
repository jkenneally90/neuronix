import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBook, FiCode, FiVideo, FiUsers } from 'react-icons/fi';

const resources = [
  {
    icon: FiBook,
    title: 'Documentation',
    description: 'Comprehensive guides and API references',
    link: '#',
  },
  {
    icon: FiCode,
    title: 'Code Examples',
    description: 'Ready-to-use code snippets and templates',
    link: '#',
  },
  {
    icon: FiVideo,
    title: 'Video Tutorials',
    description: 'Step-by-step video guides and walkthroughs',
    link: '#',
  },
  {
    icon: FiUsers,
    title: 'Community',
    description: 'Join our community of developers and users',
    link: '#',
  },
];

const ResourcesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Resources & Documentation
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Everything you need to get started and be successful with our platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.a
                key={resource.title}
                href={resource.link}
                className="group block p-6 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Icon className="h-8 w-8 text-primary-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600">
                  {resource.title}
                </h3>
                <p className="text-gray-600">{resource.description}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;