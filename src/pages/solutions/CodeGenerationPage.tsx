import React from 'react';
import { motion } from 'framer-motion';
import { FiTool, FiClipboard, FiRepeat } from 'react-icons/fi';

const CodeGenerationPage = () => {
  const features = [
    {
      icon: FiClipboard,
      title: 'Multi-Language Support',
      description: 'Generate code snippets and entire functions across multiple programming languages with high accuracy and context awareness.'
    },
    {
      icon: FiRepeat,
      title: 'Adaptive Learning',
      description: 'Continuously improve code generation by learning from best practices and patterns in open-source repositories and industry standards.'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <FiTool className="mx-auto h-16 w-16 text-secondary-600 mb-6" />
          <h1 className="text-4xl font-bold text-neutral-900 mb-4 gradient-text">
            Automated Code Generation
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-neutral-600">
            Transform complex coding challenges into elegant solutions with AI-powered automated code generation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Key Capabilities
            </h2>
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-6 bg-white p-6 rounded-2xl shadow-soft">
                <feature.icon className="h-12 w-12 text-secondary-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-large p-8"
          >
            <div className="aspect-video bg-gradient-to-br from-secondary-100 to-primary-100 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl font-bold text-secondary-600">AI</span>
                <p className="text-neutral-600 mt-4">
                  Code Generation Visualization
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CodeGenerationPage;
