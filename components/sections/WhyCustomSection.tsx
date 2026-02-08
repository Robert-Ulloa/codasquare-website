'use client'

import { motion } from 'framer-motion'

const comparisons = [
  { feature: 'Pricing', custom: 'Project-based, payment plans available', whiteLabel: '$400/month + % per order' },
  { feature: 'Design', custom: 'Unique to your brand', whiteLabel: 'Cookie-cutter template' },
  { feature: 'Features', custom: 'Built for your workflow', whiteLabel: 'Limited & generic' },
  { feature: 'If you cancel', custom: 'You keep everything', whiteLabel: 'You lose access' },
  { feature: '5-year cost', custom: 'One payment, done', whiteLabel: '$12,000+ and counting' },
]

export default function WhyCustomSection() {
  return (
    <section className="section-padding section-snap bg-neutral-950 text-neutral-100 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -bottom-24 right-[-8%] h-80 w-80 rounded-full bg-[#F77F00]/15 blur-3xl" />
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
            Custom vs. White-Label: <span className="text-[#FCBF49]">There&apos;s No Contest</span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            White-label apps rent you someone else&apos;s software. We build something that&apos;s yours — permanently.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white/5 border border-white/10 rounded-2xl shadow-lg overflow-hidden">
            {/* Header row */}
            <div className="grid grid-cols-3 bg-neutral-900 text-white">
              <div className="p-4 font-semibold"></div>
              <div className="p-4 font-semibold text-center bg-[#003049]">CODA x Square</div>
              <div className="p-4 font-semibold text-center">White-Label Apps</div>
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
                  index % 2 === 0 ? 'bg-white/5' : 'bg-white/0'
                }`}
              >
                <div className="p-4 text-sm text-neutral-200 font-medium">{row.feature}</div>
                <div className="p-4 text-sm text-[#FCBF49] font-medium text-center bg-white/5">
                  {row.custom}
                </div>
                <div className="p-4 text-sm text-neutral-400 text-center">
                  {row.whiteLabel}
                </div>
              </motion.div>
            ))}
          </div>

          {/* ROI Calculation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
          >
            <h3 className="text-lg font-bold text-neutral-50 mb-4">The Math Speaks for Itself</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div>
                <p className="text-sm text-neutral-400 mb-1">White-label at $400/mo</p>
                <p className="text-2xl font-bold text-[#D62828]">$24,000</p>
                <p className="text-xs text-neutral-500">over 5 years (plus % per transaction)</p>
              </div>
              <div className="text-3xl font-bold text-neutral-600">vs.</div>
              <div>
                <p className="text-sm text-neutral-400 mb-1">CODA x Square custom build</p>
                <p className="text-2xl font-bold text-[#FCBF49]">Project-based</p>
                <p className="text-xs text-neutral-500">yours forever, payment plans available</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
