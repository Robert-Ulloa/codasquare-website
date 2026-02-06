'use client'

import { motion } from 'framer-motion'
import { HiChat, HiPencilAlt, HiCode, HiCog, HiCheckCircle, HiSupport } from 'react-icons/hi'

const steps = [
  {
    week: 'Week 1',
    icon: HiChat,
    title: 'Discovery Call',
    description: 'We learn about your shop, your workflow, and your goals. You tell us what matters — we listen.',
  },
  {
    week: 'Week 2',
    icon: HiPencilAlt,
    title: 'Design & Planning',
    description: 'You get wireframes and a clear project plan. We nail down every feature before a single line of code is written.',
  },
  {
    week: 'Weeks 3–8',
    icon: HiCode,
    title: 'Build & Iterate',
    description: 'We build your app and website with weekly check-ins. You see progress in real time and give feedback along the way.',
  },
  {
    week: 'Weeks 9–10',
    icon: HiCog,
    title: 'Square Integration & Testing',
    description: 'We connect everything to your Square POS — menus, inventory, payments. Then test it until it\'s bulletproof.',
  },
  {
    week: 'Weeks 11–12',
    icon: HiCheckCircle,
    title: 'Launch & Training',
    description: 'Your app goes live. We train your team, set up analytics, and make sure everything runs smoothly from day one.',
  },
  {
    week: 'Ongoing',
    icon: HiSupport,
    title: 'Support & Growth',
    description: 'We don\'t disappear after launch. Optional maintenance plans keep your software updated and your business growing.',
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-neutral-900 mb-4">
            From Idea to Launch in <span className="text-accent-500">8–12 Weeks</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            A clear, collaborative process so you always know what&apos;s happening and when.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <span className="inline-block text-sm font-semibold text-accent-500 mb-2">
                    {step.week}
                  </span>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{step.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{step.description}</p>
                </div>

                {/* Icon circle */}
                <div className="relative z-10 flex-shrink-0 w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                {/* Spacer for the other side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
