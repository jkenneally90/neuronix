import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCheck } from 'react-icons/fi';

const plans = [
  {
    name: 'Starter',
    price: '0',
    description: 'Perfect for trying out our platform',
    features: [
      'Up to 3 AI agents',
      '1,000 conversations/month',
      'Basic analytics',
      'Community support',
    ],
  },
  {
    name: 'Professional',
    price: '49',
    description: 'For growing businesses and teams',
    features: [
      'Unlimited AI agents',
      '10,000 conversations/month',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
      'Team collaboration',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: [
      'Unlimited everything',
      'Dedicated support',
      'Custom development',
      'SLA guarantees',
      'On-premise deployment',
      'Advanced security',
    ],
  },
];

const PricingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Choose the plan that best fits your needs. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-primary-500' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 text-sm font-medium">
                  Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-extrabold text-gray-900">${plan.price}</span>
                  {plan.price !== 'Custom' && <span className="ml-2 text-gray-600">/month</span>}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <FiCheck className="h-5 w-5 text-primary-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-6 rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors duration-200">
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;