import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProductOverview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="products" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ x: -50 }}
            animate={inView ? { x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Build AI Agents That Understand Your Business
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our platform provides everything you need to create intelligent AI agents that can handle complex conversations, automate tasks, and integrate with your existing systems.
            </p>
            
            <div className="mt-8 space-y-4">
              {[
                'Natural language understanding',
                'Custom knowledge base integration',
                'Multi-step conversation flows',
                'Real-time analytics and insights',
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <svg
                    className="h-6 w-6 text-primary-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-4 text-gray-600">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mt-10 lg:mt-0 relative"
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-64 w-64 bg-primary-100 rounded-full opacity-50 blur-xl" />
              </div>
              <img
                className="relative rounded-lg shadow-xl"
                src="/product-screenshot.png"
                alt="Product screenshot"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductOverview;