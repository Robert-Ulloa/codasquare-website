'use client'

import { motion } from 'framer-motion'
import { HiCheck } from 'react-icons/hi'
import { analytics } from '@/lib/analytics'

const plans = [
  {
    name: 'Starter',
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
    cta: 'Get a Quote',
    popular: true,
  },
  {
    name: 'Enterprise',
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
  { name: 'Maintenance', description: 'Updates, bug fixes & hosting management' },
  { name: 'Feature Additions', description: 'New features as your business grows' },
  { name: 'Priority Support', description: 'Dedicated support with guaranteed response times' },
]

function handleTierClick(tierName: string) {
  analytics.pricingTierClick(tierName)
  window.dispatchEvent(
    new CustomEvent('prefill-contact', { detail: { tier: tierName } })
  )
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}

export default function PricingSection() {
  return (
    <section id="pricing" className="section-padding section-snap pt-28 md:pt-32 bg-transparent text-neutral-100 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-24 left-[6%] h-72 w-72 rounded-full bg-coda-blue/15 blur-3xl" />
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
            Packages Sized to <span className="gradient-text">Your Business</span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Every project is quoted on scope after a free call, so you only pay for what you need. No monthly platform fees, no cut of your orders, and the full source code is yours.
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
                  ? 'bg-white/10 border-coda-sky/50 shadow-[0_20px_60px_rgba(56,189,248,0.15)]'
                  : 'bg-white/5 border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-coda-yellow text-neutral-950 text-sm font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-neutral-50 mb-2">{plan.name}</h3>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.12em] text-coda-sky">Project-based · free quote</p>
              <p className="text-neutral-300 mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-3">
                    <HiCheck className="w-5 h-5 text-coda-sky flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-200">{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-neutral-400 mb-6">
                <span className="font-medium">Best for:</span> {plan.bestFor}
              </p>

              <button
                onClick={() => handleTierClick(plan.name)}
                className={`block text-center w-full py-3 rounded-full font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-coda-yellow text-neutral-950 hover:bg-coda-amber shadow-md hover:shadow-lg'
                    : 'bg-coda-amber text-neutral-950 hover:bg-coda-yellow shadow-md hover:shadow-lg'
                }`}
              >
                {plan.cta}
              </button>
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
          Quotes are free and come after a short discovery call. Payment plans available.
        </motion.p>
      </div>
    </section>
  )
}
