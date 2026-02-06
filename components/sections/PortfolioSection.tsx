'use client'

import { motion } from 'framer-motion'
import { HiExternalLink, HiShoppingCart, HiDeviceMobile, HiChartBar } from 'react-icons/hi'
import Link from 'next/link'

const caseStudies = [
  {
    title: 'Nimble Chicago',
    type: 'Coffee Shop Ordering App + Website',
    description:
      'Built a custom ordering app and website for Nimble Chicago, integrating directly with their Square POS. Customers order ahead, skip the line, and pay seamlessly — all synced in real time.',
    results: [
      { label: 'Online Orders', value: '+35%', icon: HiShoppingCart },
      { label: 'App Downloads', value: '2.4K', icon: HiDeviceMobile },
      { label: 'Revenue Boost', value: '+22%', icon: HiChartBar },
    ],
    tags: ['Square Integration', 'iOS App', 'Android App', 'Website', 'Loyalty Program'],
  },
  {
    title: 'Demo: Cafe Ordering Platform',
    type: 'Full-Stack Mobile Ordering',
    description:
      'A demonstration of our full ordering platform — featuring real-time menu sync, customizable modifiers, scheduled ordering, and a rewards program. Everything a modern cafe needs.',
    results: [
      { label: 'Menu Sync', value: 'Real-time', icon: HiShoppingCart },
      { label: 'Platforms', value: 'iOS + Web', icon: HiDeviceMobile },
      { label: 'Load Time', value: '<2s', icon: HiChartBar },
    ],
    tags: ['Next.js', 'React Native', 'Square API', 'Tailwind CSS'],
  },
]

export default function PortfolioSection() {
  return (
    <section id="work" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-neutral-900 mb-4">
            See What We&apos;ve <span className="text-primary-600">Built</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Real projects, real results. Here&apos;s what custom software looks like in action.
          </p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Mockup placeholder */}
                <div className="aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                      <HiDeviceMobile className="w-12 h-12" />
                    </div>
                    <p className="text-lg font-semibold">{study.title}</p>
                    <p className="text-sm text-primary-200 mt-1">Screenshot coming soon</p>
                  </div>
                </div>

                {/* Details */}
                <div className="p-8 lg:p-10">
                  <p className="text-sm font-semibold text-accent-500 mb-2">{study.type}</p>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">{study.title}</h3>
                  <p className="text-neutral-600 leading-relaxed mb-6">{study.description}</p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.results.map((result, i) => (
                      <div key={i} className="text-center">
                        <result.icon className="w-5 h-5 text-primary-600 mx-auto mb-1" />
                        <p className="text-xl font-bold text-primary-600">{result.value}</p>
                        <p className="text-xs text-neutral-500">{result.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-primary-50 text-primary-700 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="#contact" className="btn-primary">
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
