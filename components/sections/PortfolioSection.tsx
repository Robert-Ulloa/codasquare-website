'use client'

import { motion } from 'framer-motion'
import { HiDeviceMobile, HiShoppingCart, HiChartBar, HiClock, HiCollection, HiCog } from 'react-icons/hi'
import Link from 'next/link'

const caseStudies = [
  {
    title: 'Nimble Chicago',
    type: 'Square Optimization + Custom Workflows',
    description:
      'Reorganized Nimble Chicago’s entire Square system — over 1,000 items cataloged, custom workflows built, and staff trained on the new setup. The result: dramatically faster service and a surge in online orders.',
    results: [
      { label: 'Faster Checkout', value: '40%', icon: HiClock },
      { label: 'Online Orders', value: '+25%', icon: HiShoppingCart },
      { label: 'Items Organized', value: '1,000+', icon: HiCollection },
    ],
    tags: ['Square Optimization', 'Inventory Management', 'Staff Training', 'Custom Workflows'],
  },
  {
    title: 'Ordering Platform',
    type: 'Capability Showcase — Subscription Ordering',
    description:
      'A demonstration of our full ordering platform — featuring a subscription program, automated inventory management, and a customer portal with admin dashboard. Built to show what a modern independent business can do with custom software.',
    results: [
      { label: 'Subscriptions', value: 'Automated', icon: HiCog },
      { label: 'Platforms', value: 'iOS + Web', icon: HiDeviceMobile },
      { label: 'Inventory', value: 'Real-time', icon: HiChartBar },
    ],
    tags: ['React Native', 'Next.js', 'Square API', 'Subscription System'],
  },
  {
    title: 'Multi-Location Platform',
    type: 'Capability Showcase — Multi-Store Management',
    description:
      'A franchise-ready platform with centralized inventory, location-specific menus, and unified reporting across all stores. Designed for growing brands that need one system to manage them all.',
    results: [
      { label: 'Locations', value: 'Multi-store', icon: HiCollection },
      { label: 'Menus', value: 'Per-location', icon: HiShoppingCart },
      { label: 'Architecture', value: 'Franchise-ready', icon: HiCog },
    ],
    tags: ['Multi-location', 'Centralized Inventory', 'Location Menus', 'Franchise Architecture'],
  },
]

export default function PortfolioSection() {
  return (
    <section id="work" className="section-padding bg-neutral-950 text-neutral-100 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-24 left-[8%] h-80 w-80 rounded-full bg-[#D62828]/15 blur-3xl" />
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
            See What We&apos;ve <span className="text-[#FCBF49]">Built</span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
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
              className="bg-white/5 border border-white/10 rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Mockup placeholder */}
                <div className="aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-[#003049] via-[#D62828] to-[#F77F00] flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                      <HiDeviceMobile className="w-12 h-12" />
                    </div>
                    <p className="text-lg font-semibold">{study.type}</p>
                    <p className="text-sm text-white/80 mt-1">Screenshot coming soon</p>
                  </div>
                </div>

                {/* Details */}
                <div className="p-8 lg:p-10">
                  <p className="text-sm font-semibold text-[#FCBF49] mb-2">{study.type}</p>
                  <h3 className="text-2xl font-bold text-neutral-50 mb-4">{study.title}</h3>
                  <p className="text-neutral-300 leading-relaxed mb-6">{study.description}</p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.results.map((result, i) => (
                      <div key={i} className="text-center">
                        <result.icon className="w-5 h-5 text-[#FCBF49] mx-auto mb-1" />
                        <p className="text-xl font-bold text-[#FCBF49]">{result.value}</p>
                        <p className="text-xs text-neutral-400">{result.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-white/10 text-neutral-200 px-3 py-1 rounded-full border border-white/10"
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
