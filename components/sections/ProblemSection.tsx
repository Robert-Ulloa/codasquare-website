'use client'

import { motion } from 'framer-motion'
import { HiDeviceMobile, HiClock, HiChartBar } from 'react-icons/hi'

export default function ProblemSection() {
  const problems = [
    {
      icon: HiDeviceMobile,
      title: "Your website doesn't take orders",
      description: "Customers browse your menu, get excited, then... call or give up. You lose sales during busy hours.",
    },
    {
      icon: HiClock,
      title: 'Phone orders overwhelm your team',
      description: "Every call during morning rush costs you 3-5 minutes. Your baristas can't focus on the customers right in front of them.",
    },
    {
      icon: HiChartBar,
      title: 'Your data lives in silos',
      description: "Square has one view, your website another, social media something else. You're making decisions blind.",
    },
  ]

  return (
    <section className="section-padding section-snap bg-[#0B1F2A] text-neutral-100 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-24 left-[8%] h-72 w-72 rounded-full bg-[#003049]/40 blur-3xl" />
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
            You&apos;re Losing Money Every Time Someone Can&apos;t Order
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {problems.map((problem) => (
            <motion.div
              key={problem.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ y: -6 }}
              className="card text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 text-[#FCBF49] rounded-full mb-6">
                <problem.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-neutral-50 mb-4">
                {problem.title}
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
