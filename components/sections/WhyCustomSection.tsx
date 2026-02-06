'use client'

import { motion } from 'framer-motion'
import { HiCheck, HiX } from 'react-icons/hi'

const comparisons = [
  { feature: 'You own the code', custom: true, whiteLabel: false },
  { feature: 'No monthly platform fees', custom: true, whiteLabel: false },
  { feature: 'Custom features for YOUR shop', custom: true, whiteLabel: false },
  { feature: 'Your brand, not theirs', custom: true, whiteLabel: false },
  { feature: 'Direct Square integration', custom: true, whiteLabel: true },
  { feature: 'Switch providers anytime', custom: true, whiteLabel: false },
  { feature: 'Up and running in days', custom: false, whiteLabel: true },
  { feature: 'Loyalty & subscription programs', custom: true, whiteLabel: false },
  { feature: 'Scales with your business', custom: true, whiteLabel: false },
  { feature: 'Priority in app stores', custom: true, whiteLabel: false },
]

export default function WhyCustomSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-neutral-900 mb-4">
            Custom vs. White-Label: <span className="text-accent-500">There&apos;s No Contest</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            White-label apps rent you software you&apos;ll never own. We build software that&apos;s yours forever.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Header row */}
            <div className="grid grid-cols-3 bg-neutral-900 text-white">
              <div className="p-4 font-semibold">Feature</div>
              <div className="p-4 font-semibold text-center bg-primary-700">Coda Square</div>
              <div className="p-4 font-semibold text-center">White-Label</div>
            </div>

            {/* Rows */}
            {comparisons.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`grid grid-cols-3 ${
                  index % 2 === 0 ? 'bg-neutral-50' : 'bg-white'
                }`}
              >
                <div className="p-4 text-sm text-neutral-700 font-medium">{row.feature}</div>
                <div className="p-4 flex justify-center bg-primary-50/50">
                  {row.custom ? (
                    <HiCheck className="w-5 h-5 text-primary-600" />
                  ) : (
                    <HiX className="w-5 h-5 text-neutral-300" />
                  )}
                </div>
                <div className="p-4 flex justify-center">
                  {row.whiteLabel ? (
                    <HiCheck className="w-5 h-5 text-neutral-400" />
                  ) : (
                    <HiX className="w-5 h-5 text-accent-500" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
