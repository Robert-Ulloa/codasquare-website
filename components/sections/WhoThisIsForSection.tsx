'use client'

import { motion } from 'framer-motion'
import { HiCheckCircle, HiXCircle } from 'react-icons/hi'
import Link from 'next/link'

const perfectFor = [
  'Want to own their technology (not rent forever)',
  'Have unique needs that templates can’t solve',
  'Are ready to invest in long-term growth',
  'Value their brand identity',
  'Already use Square (or willing to switch)',
  'Think 3–5 years ahead',
]

const notFor = [
  'Need to launch tomorrow (custom takes 8–12 weeks)',
  'Extremely tight budgets (starting at $3K)',
  'Change their mind constantly mid-project',
  'Just want the cheapest option available',
]

export default function WhoThisIsForSection() {
  return (
    <section className="section-padding section-snap bg-[#0B1F2A] text-neutral-100 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-12 left-[-8%] h-72 w-72 rounded-full bg-[#003049]/40 blur-3xl" />
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
            Built For Shops That Are <span className="text-[#FCBF49]">Ready to Grow</span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            We work best with independent business owners who know their brand deserves more than a cookie-cutter app.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Perfect For */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-xl font-bold text-[#FCBF49] mb-6">Perfect For Independent Businesses That…</h3>
            <div className="space-y-4">
              {perfectFor.map((item) => (
                <div key={item} className="flex items-start space-x-3">
                  <HiCheckCircle className="w-5 h-5 text-[#FCBF49] flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-200">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Not Right For */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white/5 border border-white/10 rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-xl font-bold text-neutral-400 mb-6">Probably Not the Right Fit If You…</h3>
            <div className="space-y-4">
              {notFor.map((item) => (
                <div key={item} className="flex items-start space-x-3">
                  <HiXCircle className="w-5 h-5 text-neutral-500 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-300">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-neutral-400 italic">
              Being upfront saves us both time. If you&apos;re not sure, let&apos;s talk —{' '}
              <Link href="#contact" className="text-[#FCBF49] hover:text-[#F77F00] underline underline-offset-2 transition-colors not-italic">
                the consultation is free
              </Link>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
