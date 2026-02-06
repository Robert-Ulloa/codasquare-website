'use client'

import { motion } from 'framer-motion'
import { HiChat, HiCode, HiCheckCircle, HiKey } from 'react-icons/hi'

const steps = [
  {
    week: 'Phase 1',
    icon: HiChat,
    title: 'Discovery',
    bullets: [
      'Audit your current Square setup',
      'Map your customer journey',
      'Design mockups for your approval',
      'Plan features together',
    ],
  },
  {
    week: 'Phase 2',
    icon: HiCode,
    title: 'Development',
    bullets: [
      'Build your app & website',
      'Integrate with Square seamlessly',
      'Test everything (QA automation expertise)',
      'Weekly progress updates',
    ],
  },
  {
    week: 'Phase 3',
    icon: HiCheckCircle,
    title: 'Launch',
    bullets: [
      'Deploy to App Store & Google Play',
      'Launch your website',
      'Train your team (in-person or video)',
      'Go live with full support',
    ],
  },
  {
    week: 'Phase 4',
    icon: HiKey,
    title: 'You Own It',
    bullets: [
      'Full source code delivered to you',
      'Optional maintenance packages',
      'Updates when YOU decide',
      'Hire any developer for future changes',
    ],
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-padding bg-[#0B1F2A] text-neutral-100 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-[-10%] h-72 w-72 rounded-full bg-[#003049]/40 blur-3xl" />
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
            From Idea to Launch With <span className="text-[#FCBF49]">Clear Milestones</span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            A clear, collaborative process with defined milestones — so you always know what&apos;s happening and what&apos;s next.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2" />

          <div className="space-y-16">
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
                  <span className="inline-block text-sm font-semibold text-[#FCBF49] mb-2">
                    {step.week}
                  </span>
                  <h3 className="text-2xl font-bold text-neutral-50 mb-3">{step.title}</h3>
                  <ul className={`space-y-2 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                    {step.bullets.map((bullet, i) => (
                      <li key={i} className={`text-neutral-300 flex items-center gap-2 ${
                        index % 2 === 0 ? 'md:justify-end' : ''
                      }`}>
                        {index % 2 !== 0 && <span className="w-1.5 h-1.5 bg-[#F77F00] rounded-full flex-shrink-0" />}
                        <span>{bullet}</span>
                        {index % 2 === 0 && <span className="w-1.5 h-1.5 bg-[#F77F00] rounded-full flex-shrink-0" />}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Icon circle */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-[#003049] rounded-full flex items-center justify-center shadow-lg border border-white/10">
                  <step.icon className="w-8 h-8 text-[#FCBF49]" />
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
