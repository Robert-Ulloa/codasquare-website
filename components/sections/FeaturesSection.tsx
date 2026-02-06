'use client'

import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Essential',
    description: 'A focused launch kit to get your brand live and taking orders quickly.',
    features: [
      'Custom online ordering site',
      'Square menu sync',
      'Branded domain setup',
      'Mobile-first UX',
    ],
    bestFor: 'New concepts and first-time online ordering.',
  },
  {
    name: 'Professional',
    description: 'A full experience with advanced features and stronger customer retention.',
    features: [
      'Everything in Essential',
      'Native iOS & Android apps',
      'Loyalty and rewards',
      'Customer analytics dashboard',
    ],
    bestFor: 'Growing teams ready to increase repeat orders.',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'A scalable platform with custom integrations and multi-location support.',
    features: [
      'Everything in Professional',
      'Multi-location management',
      'Custom API integrations',
      'Dedicated support & SLA',
    ],
    bestFor: 'Multi-unit operators and complex workflows.',
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-neutral-900 mb-4">What You Get</h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Clear tiers built to match your stage, each designed to feel premium without extra complexity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 bg-white shadow-lg border border-transparent ${
                tier.popular ? 'ring-2 ring-accent-500 md:scale-105' : 'hover:shadow-xl'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                  {tier.name}
                </h3>
                <p className="text-neutral-600">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-primary-600 flex-shrink-0" />
                    <span className="text-neutral-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm font-medium text-neutral-900">
                <span className="text-neutral-500">Best for: </span>
                {tier.bestFor}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
