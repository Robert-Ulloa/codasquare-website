'use client'

import { motion } from 'framer-motion'
import { HiDeviceMobile, HiShoppingCart, HiChartBar, HiCollection, HiCog } from 'react-icons/hi'
import Link from 'next/link'
import Image from 'next/image'
import { analytics } from '@/lib/analytics'

const caseStudies = [
  {
    title: 'Nimble Chicago',
    type: 'Live product · Custom ordering app + Square',
    description:
      'A branded iOS and Android ordering app with an admin dashboard for a Chicago café, connected to their Square POS. We also reorganized their Square catalog (over 1,000 items) so menu, stock and payments stay accurate everywhere.',
    results: [
      { label: 'Orders after launch', value: '+35%', icon: HiShoppingCart },
      { label: 'Live on', value: 'iOS + Android', icon: HiDeviceMobile },
      { label: 'Items Organized', value: '1,000+', icon: HiCollection },
    ],
    tags: ['React Native', 'Next.js', 'Square API', 'App Store & Google Play'],
    image: '',
    screens: ['/images/work/nimble-home.jpg', '/images/work/nimble-menu.jpg'],
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
    image: '/images/portfolio-ordering-platform.png',
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
    image: '/images/portfolio-multi-location.png',
  },
]

export default function PortfolioSection() {
  return (
    <section id="work" className="section-padding section-snap pt-28 md:pt-32 text-neutral-100 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-24 left-[8%] h-80 w-80 rounded-full bg-coda-blue/15 blur-3xl" />
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
            See What We&apos;ve <span className="gradient-text">Built</span>
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
                {/* Mockup */}
                {'screens' in study && study.screens ? (
                  <div className="relative flex aspect-[4/3] items-end justify-center gap-4 overflow-hidden bg-[radial-gradient(circle_at_50%_30%,#1d3a6e,#0a1222_72%)] px-8 pt-10 lg:aspect-auto lg:min-h-[420px]">
                    {study.screens.map((src, i) => (
                      <Image
                        key={src}
                        src={src}
                        alt={`${study.title} app screen ${i + 1}`}
                        width={390}
                        height={844}
                        className={`w-[38%] rounded-t-[24px] border-4 border-b-0 border-[#05070d] shadow-2xl ${i === 0 ? '-rotate-[4deg] translate-y-6' : 'rotate-[4deg]'}`}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="aspect-[4/3] lg:aspect-auto bg-neutral-900">
                    <Image
                      src={study.image}
                      alt={`${study.title} mockup`}
                      width={1600}
                      height={1200}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}

                {/* Details */}
                <div className="p-8 lg:p-10">
                  <p className="text-sm font-semibold text-coda-sky mb-2">{study.type}</p>
                  <h3 className="text-2xl font-bold text-neutral-50 mb-4">{study.title}</h3>
                  <p className="text-neutral-300 leading-relaxed mb-6">{study.description}</p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.results.map((result, i) => (
                      <div key={i} className="text-center">
                        <result.icon className="w-5 h-5 text-coda-sky mx-auto mb-1" />
                        <p className="text-xl font-bold text-coda-sky">{result.value}</p>
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
          <Link href="/contact" onClick={() => analytics.ctaClick('Start Your Project', 'portfolio')} className="btn-primary">
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
