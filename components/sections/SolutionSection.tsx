'use client'

import { motion } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi'

export default function SolutionSection() {
  const features = [
    'Ordering platform on iOS, Android, and a storefront website',
    'Real-time Square inventory and menu sync',
    'Custom features for YOUR business (loyalty, subscriptions, event ordering)',
    'One-time build, minimal ongoing costs',
  ]

  return (
    <section id="solutions" className="section-padding section-snap pt-28 md:pt-32 bg-neutral-950 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-20 right-[-8%] h-72 w-72 rounded-full bg-[#D62828]/20 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[15%] h-96 w-96 rounded-full bg-[#F77F00]/20 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg mb-6">
              Custom Software Built Around Your Square System
            </h2>
            
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
              Unlike white-label apps that lock you into monthly fees,
              we build custom solutions tailored to your workflow.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <HiCheckCircle className="w-6 h-6 text-[#FCBF49] flex-shrink-0 mt-1" />
                  <span className="text-lg text-neutral-200">{feature}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-2xl font-semibold text-[#FCBF49] italic">
              Your business is unique. Your software should be too.
            </p>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              {/* Square POS in center */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-2xl shadow-2xl mb-4">
                  <span className="text-4xl font-bold text-[#003049]">□</span>
                </div>
                <p className="text-lg font-semibold">Square POS</p>
              </div>

              {/* Connected elements */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Mobile App', icon: '📱' },
                  { label: 'Website', icon: '🌐' },
                  { label: 'Analytics', icon: '📊' },
                  { label: 'Customers', icon: '👥' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10"
                  >
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <p className="text-sm font-medium text-neutral-200">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
