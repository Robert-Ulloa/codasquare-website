'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { HiCheckCircle, HiArrowRight } from 'react-icons/hi'
import { analytics } from '@/lib/analytics'

const trust = ['Connected to Square', 'No monthly platform fees', 'You own the code']
const capabilities = [
  'Mobile ordering apps', 'Ordering websites', 'Square POS sync', 'Loyalty & rewards', 'Push notifications',
  'Admin dashboards', 'iOS & Android', 'Menu & stock sync', 'Gift cards', 'Customer accounts',
]

const words = ['Custom', 'ordering', 'apps', 'for', 'independent', 'businesses,']

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40">
      <div className="container-custom relative z-10 grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-coda-sky/30 bg-coda-sky/10 px-4 py-1.5 text-sm font-semibold text-sky-200"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coda-sky opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-coda-sky" />
            </span>
            Taking on new projects
          </motion.p>

          <h1 className="heading-xl mb-6 text-white">
            {words.map((word, i) => (
              <motion.span
                key={word}
                className="inline-block"
                initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}&nbsp;
              </motion.span>
            ))}
            <motion.span
              className="gradient-text inline-block pb-1"
              initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              without the monthly fees.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-8 max-w-xl text-lg leading-relaxed text-neutral-300 md:text-xl"
          >
            Your own branded app and website, connected to your Square POS. One project, built for how your business
            works, and yours to keep. No templates, no per-order cut.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mb-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link href="/contact" onClick={() => analytics.ctaClick('Free Quote', 'hero')} className="btn-primary">
              Get a free quote <HiArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/work" onClick={() => analytics.ctaClick('See Our Work', 'hero')} className="btn-secondary">
              See our work
            </Link>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 1 } } }}
            className="flex flex-wrap gap-x-6 gap-y-3"
          >
            {trust.map((item) => (
              <motion.li
                key={item}
                variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                className="flex items-center gap-2 text-sm font-medium text-neutral-300"
              >
                <HiCheckCircle className="h-5 w-5 text-coda-sky" />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[460px]"
        >
          <div className="absolute inset-[-12%] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,.35),rgba(255,61,111,.18)_45%,transparent_70%)] blur-2xl" />
          <div className="relative flex items-end justify-center gap-4 pt-6">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="w-[46%] -rotate-[5deg] overflow-hidden rounded-[28px] border-4 border-[#0b0f18] shadow-2xl shadow-black/60"
            >
              <Image src="/images/work/nimble-home.jpg" alt="Nimble Chicago ordering app home screen" width={390} height={844} priority className="h-auto w-full" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              className="mb-10 w-[46%] rotate-[5deg] overflow-hidden rounded-[28px] border-4 border-[#0b0f18] shadow-2xl shadow-black/60"
            >
              <Image src="/images/work/nimble-menu.jpg" alt="Nimble Chicago ordering app cart screen" width={390} height={844} priority className="h-auto w-full" />
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="glass absolute -left-4 bottom-16 rounded-2xl px-4 py-3 shadow-xl sm:-left-10"
          >
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-coda-sky">Nimble Chicago</p>
            <p className="gradient-text text-2xl font-extrabold">+35% orders</p>
            <p className="text-xs text-neutral-400">after the app launched</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="glass absolute -right-2 top-8 flex items-center gap-2 rounded-full px-4 py-2 shadow-xl sm:-right-8"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
            <span className="font-mono text-xs text-neutral-200">Square menu &amp; stock in sync</span>
          </motion.div>
        </motion.div>
      </div>

      <div className="marquee relative z-10 mt-20 border-y border-white/10 py-5" aria-hidden="true">
        <div className="marquee-track">
          {[...capabilities, ...capabilities].map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-12 whitespace-nowrap font-mono text-sm text-neutral-500">
              {item}
              <span className="text-coda-red">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
