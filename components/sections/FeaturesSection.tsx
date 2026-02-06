'use client'

import { motion } from 'framer-motion'
import { HiShoppingCart, HiCog, HiLightningBolt, HiRefresh, HiChartBar, HiUserGroup, HiGlobe, HiShieldCheck, HiSupport } from 'react-icons/hi'

const tiers = [
  {
    name: 'Essential',
    tagline: 'Get online and start taking orders',
    features: [
      { icon: HiShoppingCart, text: 'Online ordering website' },
      { icon: HiRefresh, text: 'Real-time Square menu sync' },
      { icon: HiCog, text: 'Order management dashboard' },
      { icon: HiGlobe, text: 'Custom domain & branding' },
    ],
    color: 'primary',
  },
  {
    name: 'Professional',
    tagline: 'Native apps + advanced features',
    features: [
      { icon: HiLightningBolt, text: 'Everything in Essential' },
      { icon: HiShoppingCart, text: 'Native iOS & Android apps' },
      { icon: HiUserGroup, text: 'Loyalty & rewards program' },
      { icon: HiChartBar, text: 'Customer analytics dashboard' },
    ],
    color: 'accent',
    popular: true,
  },
  {
    name: 'Enterprise',
    tagline: 'Multi-location & custom integrations',
    features: [
      { icon: HiLightningBolt, text: 'Everything in Professional' },
      { icon: HiGlobe, text: 'Multi-location support' },
      { icon: HiShieldCheck, text: 'Custom API integrations' },
      { icon: HiSupport, text: 'Priority support & SLA' },
    ],
    color: 'primary',
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
          <h2 className="heading-lg text-neutral-900 mb-4">
            Three Tiers, One Goal: <span className="text-primary-600">Your Growth</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Every solution is custom-built. Pick the scope that fits your business today — scale up anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                tier.popular ? 'ring-2 ring-accent-500 scale-105' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-2 ${
                tier.color === 'accent' ? 'text-accent-500' : 'text-primary-600'
              }`}>
                {tier.name}
              </h3>
              <p className="text-neutral-600 mb-6">{tier.tagline}</p>

              <div className="space-y-4">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <feature.icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      tier.color === 'accent' ? 'text-accent-500' : 'text-primary-600'
                    }`} />
                    <span className="text-neutral-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
