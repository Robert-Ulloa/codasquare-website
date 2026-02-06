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
      title: "Phone orders overwhelm your team",
      description: "Every call during morning rush costs you 3-5 minutes. Your baristas can't focus on the customers right in front of them.",
    },
    {
      icon: HiChartBar,
      title: "Your data lives in silos",
      description: "Square has one view, your website another, social media something else. You're making decisions blind.",
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-neutral-900 mb-4">
            You&apos;re Losing Money Every Time Someone Can&apos;t Order
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 text-accent-600 rounded-full mb-6">
                <problem.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                {problem.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
