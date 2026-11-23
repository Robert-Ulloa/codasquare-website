'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'

const stats = [
  { value: '+35%', label: 'orders after launch' },
  { value: 'iOS + Android', label: 'live on both app stores' },
  { value: 'Real-time', label: 'Square menu & stock sync' },
]

export default function ProofSection() {
  return (
    <section className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/5 lg:grid-cols-[.9fr_1.1fr]"
        >
          <div className="relative min-h-[340px] overflow-hidden bg-[radial-gradient(circle_at_50%_30%,#1d3a6e,#0a1222_72%)]">
            <div className="absolute inset-x-8 bottom-0 top-10 flex items-end justify-center gap-4">
              <Image src="/images/work/nimble-home.jpg" alt="" width={390} height={844} className="w-[40%] -rotate-[4deg] translate-y-6 rounded-t-[24px] border-4 border-b-0 border-[#05070d] shadow-2xl" />
              <Image src="/images/work/nimble-menu.jpg" alt="" width={390} height={844} className="w-[40%] rotate-[4deg] rounded-t-[24px] border-4 border-b-0 border-[#05070d] shadow-2xl" />
            </div>
          </div>
          <div className="p-8 md:p-12">
            <p className="eyebrow mb-4">Case study · Nimble Chicago</p>
            <h2 className="heading-lg mb-5 text-white">
              A café&apos;s own ordering app, <span className="gradient-text">live on both app stores.</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-neutral-300">
              We built Nimble Chicago a branded iOS and Android ordering app with an admin dashboard, all connected to
              their existing Square POS. Menu, stock and payments stay in Square; customers order in a couple of taps.
            </p>
            <dl className="mb-8 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="gradient-text text-xl font-extrabold tracking-tight">{stat.value}</dd>
                  <dd className="mt-1 text-sm text-neutral-400">{stat.label}</dd>
                </div>
              ))}
            </dl>
            <Link href="/work" className="inline-flex items-center gap-2 font-semibold text-coda-sky transition-colors hover:text-white">
              See more work <HiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
