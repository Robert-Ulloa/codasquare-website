'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { HiSparkles, HiCheckCircle } from 'react-icons/hi'
import { analytics } from '@/lib/analytics'

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 section-snap bg-neutral-950 text-neutral-100 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-32 right-[-12%] h-96 w-96 rounded-full bg-[#F77F00]/20 blur-3xl" />
        <div className="absolute top-1/3 left-[-10%] h-96 w-96 rounded-full bg-[#D62828]/15 blur-3xl" />
        <div className="absolute bottom-[-20%] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#FCBF49]/20 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center space-x-2 bg-white/10 text-[#FCBF49] px-4 py-2 rounded-full mb-6"
            >
              <HiSparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Custom Apps • Powered by Square</span>
            </motion.div>

            <h1 className="heading-xl text-neutral-50 mb-6">
              More Orders, Fewer Headaches —{' '}
              <span className="text-[#FCBF49]">Custom Apps</span> Powered by{' '}
              <span className="text-[#F77F00]">Square</span>
            </h1>

            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
              Custom ordering apps and storefront websites for independent and new businesses.
              One build. Your brand. Your rules.
            </p>

            {/* Trust Badges */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {[
                'Custom apps powered by Square',
                'Built for Independent Businesses',
                'You Own Everything',
              ].map((item) => (
                <motion.div
                  key={item}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                  }}
                  className="flex items-center space-x-2 text-neutral-300"
                >
                  <HiCheckCircle className="w-5 h-5 text-[#FCBF49]" />
                  <span className="text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                onClick={() => analytics.ctaClick('Book Free Consultation', 'hero')}
                className="btn-primary text-center"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/work"
                onClick={() => analytics.ctaClick('See Our Work', 'hero')}
                className="btn-secondary text-center"
              >
                See Our Work
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div className="aspect-[4/3] bg-neutral-900">
                <Image
                  src="/images/hero-app-mockup.png"
                  alt="CODA for Square app and website mockup"
                  width={1600}
                  height={1200}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 bg-neutral-950/90 border border-white/10 rounded-xl shadow-xl p-4 hidden lg:block"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#FCBF49] rounded-full"></div>
                <span className="text-sm font-medium text-neutral-200">Live Orders</span>
              </div>
              <p className="text-2xl font-bold text-[#FCBF49] mt-2">+25%</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-neutral-950/90 border border-white/10 rounded-xl shadow-xl p-4 hidden lg:block"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#F77F00] rounded-full"></div>
                <span className="text-sm font-medium text-neutral-200">Square Sync</span>
              </div>
              <p className="text-2xl font-bold text-[#F77F00] mt-2">Real-time</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
