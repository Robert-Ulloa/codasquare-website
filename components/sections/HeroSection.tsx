'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiSparkles, HiCheckCircle } from 'react-icons/hi'

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full mb-6">
              <HiSparkles className="w-4 h-4" />
              <span className="text-sm font-medium">No Templates • No Subscriptions</span>
            </div>

            <h1 className="heading-xl text-neutral-900 mb-6">
              Custom Apps & Websites That Turn Your{' '}
              <span className="text-primary-600">Square POS</span> Into A{' '}
              <span className="text-accent-500">Growth Engine</span>
            </h1>

            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              Purpose-built ordering apps and websites for coffee shops and cafes. 
              Just software that works as hard as you do.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-2 text-neutral-600">
                <HiCheckCircle className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-medium">Powered by Square</span>
              </div>
              <div className="flex items-center space-x-2 text-neutral-600">
                <HiCheckCircle className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-medium">Built for Independent Businesses</span>
              </div>
              <div className="flex items-center space-x-2 text-neutral-600">
                <HiCheckCircle className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-medium">You Own Everything</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="btn-primary text-center">
                Book Free Consultation
              </Link>
              <Link href="#work" className="btn-secondary text-center">
                See Our Work
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for app/website mockup */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-32 h-32 mx-auto mb-4 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                    <HiSparkles className="w-16 h-16" />
                  </div>
                  <p className="text-lg font-semibold mb-2">App + Website Mockup</p>
                  <p className="text-sm opacity-90">Replace with actual design screenshot</p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 hidden lg:block"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Live Orders</span>
              </div>
              <p className="text-2xl font-bold text-primary-600 mt-2">+25%</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 hidden lg:block"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                <span className="text-sm font-medium">Square Sync</span>
              </div>
              <p className="text-2xl font-bold text-accent-500 mt-2">Real-time</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
