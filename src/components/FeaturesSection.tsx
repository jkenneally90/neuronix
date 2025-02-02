import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IconType } from 'react-icons';
import { FiCommand, FiZap, FiGlobe } from 'react-icons/fi';

// Dynamically import icons
const features = [
  {
    icon: FiCommand,
    title: 'Visual Flow Builder',
    description: 'Design conversational flows with our intuitive drag-and-drop interface.',
  },
  {
    icon: FiZap,
    title: 'Instant Deployment',
    description: 'Deploy your AI agents with one click and scale automatically.',
  },
  {
    icon: FiGlobe,
    title: 'Multi-channel Support',
    description: 'Connect with users across various platforms and messaging services.',
  },
];

export interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <Icon className="w-10 h-10 text-primary-500 mr-4" />
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const FeaturesSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="py-16 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Powerful Features for AI Agents
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Neuronix provides cutting-edge tools to build, deploy, and manage intelligent AI agents.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;