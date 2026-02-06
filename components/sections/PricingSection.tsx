'use client'

import { motion } from 'framer-motion'
import { HiCheck } from 'react-icons/hi'
import Link from 'next/link'

const plans = [
  {
    name: 'Essential',
    price: '$4,500',
    description: 'Custom ordering website with Square integration',
    features: [
      'Custom-designed ordering website',
      'Real-time Square menu sync',
      'Online payment processing',
      'Order management dashboard',
      'Mobile-responsive design',
      'Custom domain setup',
      '30 days post-launch support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$12,000',
    description: 'Website + native mobile apps with loyalty',
    features: [
      'Everything in Essential',
      'Native iOS app',
      'Native Android app',
      'Loyalty & rewards program',
      'Push notifications',
      'Customer analytics dashboard',
      'App store submission',
      '60 days post-launch support',
    ],
    cta: 'Most Popular',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Multi-location platform with custom integrations',
    features: [
      'Everything in Professional',
      'Multi-location support',
      'Custom API integrations',
      'Advanced analytics & reporting',
      'Subscription/recurring orders',
      'Dedicated project manager',
      'Priority support & SLA',
      'Ongoing maintenance plan',
    ],
    cta: "Let's Talk",
    popular: false,
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-neutral-900 mb-4">
            Transparent Pricing, <span className="text-primary-600">No Surprises</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            One-time investment. No monthly platform fees. You own everything we build.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                plan.popular ? 'ring-2 ring-accent-500 md:scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                  Best Value
                </div>
              )}

              <h3 className="text-xl font-bold text-neutral-900 mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-primary-600">{plan.price}</span>
                {plan.price !== 'Custom' && (
                  <span className="text-neutral-500 ml-2">one-time</span>
                )}
              </div>
              <p className="text-neutral-600 mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-3">
                    <HiCheck className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`block text-center w-full py-3 rounded-lg font-medium transition-all duration-200 ${
                  plan.popular
                    ? 'bg-accent-500 text-white hover:bg-accent-600 shadow-md hover:shadow-lg'
                    : 'bg-primary-600 text-white hover:bg-primary-700 shadow-md hover:shadow-lg'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-neutral-500 text-sm mt-8"
        >
          Optional maintenance plans available starting at $200/month. All prices in USD.
        </motion.p>
      </div>
    </section>
  )
}
