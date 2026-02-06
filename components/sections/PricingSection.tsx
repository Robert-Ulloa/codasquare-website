'use client'

import { motion } from 'framer-motion'
import { HiCheck } from 'react-icons/hi'
import Link from 'next/link'

const plans = [
  {
    name: 'Starter',
    price: 'Custom',
    description: 'Website or app to validate your idea and launch fast',
    features: [
      'Mobile app OR custom website',
      'Square POS integration',
      'Online ordering & payment',
      'Mobile-responsive design',
      'App Store deployment (if app)',
      '30 days post-launch support',
    ],
    bestFor: 'Single location testing digital ordering',
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    price: 'Custom',
    description: 'App + website with advanced features and deeper automation',
    features: [
      'Native mobile app + custom website',
      'Advanced Square features & inventory sync',
      '2–3 custom features for your business',
      'Customer accounts & profiles',
      'Gift cards & loyalty program',
      'Team training included',
      '90 days post-launch support',
    ],
    bestFor: 'Established businesses ready to scale',
    cta: 'Most Popular',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Multi-location platform with ongoing partnership',
    features: [
      'Everything in Professional',
      'Multi-location systems',
      'Complex custom integrations',
      'Subscription & membership features',
      'Franchise-ready architecture',
      'Dedicated support & SLA',
      'Ongoing development partnership',
    ],
    bestFor: 'Growing businesses with unique needs',
    cta: 'Let’s Talk',
    popular: false,
  },
]

const addOns = [
  { name: 'Maintenance', price: 'from $200/mo', description: 'Updates, bug fixes & hosting management' },
  { name: 'Feature Additions', price: 'from $200/mo', description: 'New features as your business grows' },
  { name: 'Priority Support', price: '$500/mo', description: 'Dedicated support with guaranteed response times' },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="section-padding bg-neutral-950 text-neutral-100 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-24 left-[6%] h-72 w-72 rounded-full bg-[#D62828]/15 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-neutral-50 mb-4">
            Flexible Pricing, <span className="text-[#FCBF49]">Right-Fit Scope</span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Pricing depends on scope and complexity. No platform fees. Full source code included.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ y: -6 }}
              className={`relative rounded-2xl p-8 border backdrop-blur ${
                plan.popular
                  ? 'bg-white/10 border-[#FCBF49]/50 shadow-[0_20px_60px_rgba(252,191,73,0.15)]'
                  : 'bg-white/5 border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FCBF49] text-neutral-950 text-sm font-semibold px-4 py-1 rounded-full">
                  Best Value
                </div>
              )}

              <h3 className="text-xl font-bold text-neutral-50 mb-2">{plan.name}</h3>
              <div className="mb-2">
                <span className="text-3xl font-bold text-[#FCBF49]">{plan.price}</span>
                <span className="text-sm font-semibold text-neutral-300 ml-2 uppercase tracking-wide">project-based</span>
              </div>
              <p className="text-neutral-300 mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-3">
                    <HiCheck className="w-5 h-5 text-[#FCBF49] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-200">{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-neutral-400 mb-6">
                <span className="font-medium">Best for:</span> {plan.bestFor}
              </p>

              <Link
                href="#contact"
                className={`block text-center w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-[#FCBF49] text-neutral-950 hover:bg-[#F77F00] shadow-md hover:shadow-lg'
                    : 'bg-[#F77F00] text-neutral-950 hover:bg-[#FCBF49] shadow-md hover:shadow-lg'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold text-neutral-50 text-center mb-8">Add-ons</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {addOns.map((addon) => (
              <div key={addon.name} className="bg-white/5 border border-white/10 rounded-xl p-5 shadow-sm text-center">
                <p className="font-semibold text-neutral-50">{addon.name}</p>
                <p className="text-[#FCBF49] font-bold mt-1">{addon.price}</p>
                <p className="text-sm text-neutral-400 mt-1">{addon.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-neutral-500 text-sm mt-8"
        >
          All prices in USD. Exact pricing determined after discovery call. Payment plans available.
        </motion.p>
      </div>
    </section>
  )
}
