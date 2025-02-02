import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Build Powerful AI Agents
            <span className="block text-primary-400">Without Code</span>
          </motion.h1>
          
          <motion.p
            className="mt-6 max-w-2xl mx-auto text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Create, deploy, and scale AI agents that understand your business.
            No coding required.
          </motion.p>

          <motion.div
            className="mt-10 flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="px-8 py-3 text-base font-medium rounded-lg bg-white text-primary-600 hover:bg-gray-100 transition-colors duration-200">
              Get Started Free
            </button>
            <button className="px-8 py-3 text-base font-medium rounded-lg border-2 border-white text-white hover:bg-white hover:text-primary-600 transition-colors duration-200">
              Watch Demo
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <img
            src="/dashboard-preview.png"
            alt="Platform Preview"
            className="rounded-lg shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;