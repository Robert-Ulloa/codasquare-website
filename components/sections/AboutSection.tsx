'use client'

import { motion } from 'framer-motion'
import { HiOfficeBuilding, HiShieldCheck, HiCube, HiKey, HiTranslate } from 'react-icons/hi'

const highlights = [
  {
    icon: HiOfficeBuilding,
    title: 'Real Small Business Experience',
    description: 'I helped my partner run his business and saw firsthand how hard it is to make Square do exactly what you need.',
  },
  {
    icon: HiShieldCheck,
    title: 'QA & Automation Expert',
    description: 'Professional QA background with Selenium, Playwright, and Cypress. Every line of code is tested with the same rigor I bring to enterprise software.',
  },
  {
    icon: HiCube,
    title: 'Square Specialist',
    description: 'Deep expertise in Square’s ecosystem — POS, payments, inventory, and customer management. I optimized 1,000+ items for Nimble Chicago.',
  },
  {
    icon: HiKey,
    title: 'Code That\'s Yours',
    description: 'Every line of code and design asset belongs to you. No strings attached.',
  },
  {
    icon: HiTranslate,
    title: 'Bilingual (English & Spanish)',
    description: 'Fluent in both languages, opening doors to a wider range of independent business owners across the US.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="section-padding section-snap bg-[#0B1F2A] text-neutral-100 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-24 right-[-10%] h-80 w-80 rounded-full bg-[#003049]/40 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo / Visual placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-[#003049] to-[#D62828] rounded-2xl p-[1px]">
              <div className="h-full w-full rounded-2xl bg-neutral-950 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 bg-[#003049] rounded-full flex items-center justify-center border border-white/10">
                    <span className="text-5xl font-bold text-[#EAE2B7]">R</span>
                  </div>
                  <p className="text-neutral-300 font-medium">Your photo here</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="heading-lg text-neutral-50 mb-6">
              Hi, I&apos;m <span className="text-[#FCBF49]">Roberto</span>
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed mb-4">
              I started CODA for Square after helping my partner run his business and seeing how hard it can be
              to make Square match real-world workflows. We tried white-label options and generic tools,
              but none of them felt right or flexible enough for the business we were building.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed mb-8">
              That experience pushed me to build custom software that matches the essence of each business —
              not templates, not monthly lock-ins. Every project is designed around your operations, powered by
              Square where it makes sense, and delivered with full ownership. Coda means the concluding passage —
              the part that brings everything together — and that’s the role I want our work to play in your business.
            </p>

            <div className="space-y-5">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center border border-white/10">
                    <item.icon className="w-5 h-5 text-[#FCBF49]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-50">{item.title}</h3>
                    <p className="text-sm text-neutral-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
