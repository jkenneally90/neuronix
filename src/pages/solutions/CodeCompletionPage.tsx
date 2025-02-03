import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiZap, FiTrendingUp } from 'react-icons/fi';

const CodeCompletionPage = () => {
  const features = [
    {
      icon: FiZap,
      title: 'Context-Aware Suggestions',
      description: 'Our AI understands the context of your code, providing intelligent and relevant autocomplete suggestions that go beyond simple text matching.'
    },
    {
      icon: FiTrendingUp,
      title: 'Continuous Learning',
      description: 'The AI model continuously improves its suggestions by learning from the most recent and relevant coding patterns across multiple programming languages.'
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
          <FiCode className="mx-auto h-16 w-16 text-primary-600 mb-6" />
          <h1 className="text-4xl font-bold text-neutral-900 mb-4 gradient-text">
            Intelligent Code Completion
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-neutral-600">
            Revolutionize your coding workflow with AI-powered autocomplete that understands context and boosts productivity.
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
              How It Works
            </h2>
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-6 bg-white p-6 rounded-2xl shadow-soft">
                <feature.icon className="h-12 w-12 text-primary-600 flex-shrink-0" />
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
            <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl font-bold text-primary-600">AI</span>
                <p className="text-neutral-600 mt-4">
                  Code Completion Visualization
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CodeCompletionPage;
