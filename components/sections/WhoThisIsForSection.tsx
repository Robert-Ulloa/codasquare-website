'use client'

import { motion } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi'

const idealCustomers = [
  {
    title: 'Independent Coffee Shops',
    description: 'Single or multi-location cafes ready to go beyond a basic website and start taking orders online.',
    traits: ['Using Square POS', '50+ daily transactions', 'Wants to grow online orders'],
  },
  {
    title: 'Specialty Cafes & Roasters',
    description: 'Shops offering subscriptions, specialty drinks, or unique experiences that white-label tools can\'t handle.',
    traits: ['Custom menu needs', 'Subscription programs', 'Brand-conscious'],
  },
  {
    title: 'Growing Multi-Location Brands',
    description: 'Expanding businesses that need one platform across all stores with centralized reporting and management.',
    traits: ['2–10 locations', 'Need centralized data', 'Ready to invest in growth'],
  },
]

export default function WhoThisIsForSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-neutral-900 mb-4">
            Built For Shops That Are <span className="text-primary-600">Ready to Grow</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            We work best with coffee shop owners who know their business deserves more than a cookie-cutter app.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {idealCustomers.map((customer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card"
            >
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{customer.title}</h3>
              <p className="text-neutral-600 leading-relaxed mb-6">{customer.description}</p>
              <div className="space-y-3">
                {customer.traits.map((trait) => (
                  <div key={trait} className="flex items-center space-x-2">
                    <HiCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">{trait}</span>
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
