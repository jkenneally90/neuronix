import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
  FiCode, FiTool, FiSearch, FiType, 
  FiZap, FiClipboard, FiAlertTriangle, FiGlobe 
} from 'react-icons/fi';

const solutions = [
  {
    name: 'Intelligent Code Completion',
    description: 'Advanced AI-driven autocomplete that provides context-aware suggestions across multiple programming languages, reducing boilerplate code and accelerating development.',
    icon: FiCode,
    detailIcon: FiZap,
    gradient: 'from-primary-50 to-primary-100',
    iconColor: 'text-primary-600',
    link: '/solutions/code-completion',
    features: [
      'Context-aware suggestions',
      'Multi-language support',
      'Real-time code optimization'
    ]
  },
  {
    name: 'Automated Code Generation',
    description: 'Generate entire functions and code blocks that support complex programming patterns and best practices, seamlessly integrating with major IDEs and development environments.',
    icon: FiTool,
    detailIcon: FiClipboard,
    gradient: 'from-secondary-50 to-secondary-100',
    iconColor: 'text-secondary-600',
    link: '/solutions/code-generation',
    features: [
      'Adaptive learning algorithms',
      'Pattern recognition',
      'Best practice implementation'
    ]
  },
  {
    name: 'Intelligent Debugging Assistant',
    description: 'AI-powered error detection and resolution that provides actionable insights and code fix recommendations, significantly reducing debugging time and improving overall code quality.',
    icon: FiSearch,
    detailIcon: FiAlertTriangle,
    gradient: 'from-neutral-50 to-neutral-100',
    iconColor: 'text-neutral-600',
    link: '/solutions/debugging-assistant',
    features: [
      'Proactive error detection',
      'Contextual fix suggestions',
      'Performance optimization'
    ]
  },
  {
    name: 'Natural Language to Code Translation',
    description: 'Convert plain English descriptions into functional code, supporting multiple programming paradigms and ideal for rapid prototyping and concept validation.',
    icon: FiType,
    detailIcon: FiGlobe,
    gradient: 'from-primary-50 to-secondary-50',
    iconColor: 'text-primary-500',
    link: '/solutions/natural-language-code',
    features: [
      'Multi-language translation',
      'Context-aware interpretation',
      'Rapid prototyping'
    ]
  }
];

const SolutionCard = ({ solution, index, inView, onHover }) => {
  const { ref, inView: cardInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Link to={solution.link} onMouseEnter={() => onHover(solution)}>
      <motion.div
        ref={ref}
        className={`card bg-gradient-to-br ${solution.gradient} overflow-hidden group relative`}
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={inView ? { 
          opacity: cardInView ? 1 : 0, 
          scale: cardInView ? 1 : 0.95, 
          y: cardInView ? 0 : 30 
        } : {}}
        whileHover={{ 
          scale: 1.03, 
          transition: { duration: 0.2 }
        }}
        transition={{ 
          duration: 0.5, 
          delay: index * 0.2,
          type: 'spring',
          stiffness: 300,
          damping: 20
        }}
      >
        <div className="p-10 text-center relative space-y-6">
          <motion.div
            className={`mx-auto h-24 w-24 mb-6 ${solution.iconColor} 
              bg-white bg-opacity-30 rounded-full flex items-center justify-center 
              transition-all duration-300 group-hover:rotate-6`}
          >
            <solution.icon className="h-14 w-14" />
          </motion.div>
          
          <h3 className="text-3xl font-bold text-neutral-900 mb-4 
            transition-colors duration-300 group-hover:text-primary-600">
            {solution.name}
          </h3>
          
          <p className="text-lg text-neutral-700 text-opacity-80 
            transition-all duration-300 group-hover:text-opacity-100">
            {solution.description}
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute bottom-6 left-0 right-0 opacity-0 
              group-hover:opacity-100 transition-all duration-300"
          >
            <span className="text-sm text-primary-600 font-semibold hover:underline cursor-pointer">
              Learn More →
            </span>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};

const SolutionsPage = () => {
  const [hoveredSolution, setHoveredSolution] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      className="relative overflow-hidden section-spacing"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ 
        backgroundImage: 'linear-gradient(to bottom right, #f5f7fa, #e6ebf3)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{ 
          backgroundImage: 'radial-gradient(circle at center, rgba(79, 70, 229, 0.1) 0%, transparent 70%)',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-neutral-900 mb-4 gradient-text">
            Codeium Solutions
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-neutral-600">
            Revolutionize your software development workflow with our cutting-edge AI solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {solutions.map((solution, index) => (
            <SolutionCard 
              key={solution.name} 
              solution={solution} 
              index={index} 
              inView={inView}
              onHover={setHoveredSolution}
            />
          ))}
        </div>

        {/* Detailed Solution Hover Preview */}
        <AnimatePresence>
          {hoveredSolution && (
            <motion.div
              key="solution-preview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-8 left-1/2 transform -translate-x-1/2 
                bg-white rounded-3xl shadow-2xl p-6 max-w-md w-full z-50"
            >
              <div className="flex items-center space-x-6">
                <div className={`h-16 w-16 ${hoveredSolution.iconColor} 
                  bg-white bg-opacity-30 rounded-full flex items-center justify-center`}>
                  <hoveredSolution.detailIcon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    {hoveredSolution.name}
                  </h3>
                  <ul className="space-y-1 text-neutral-600">
                    {hoveredSolution.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <svg className="h-3 w-3 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default SolutionsPage;
