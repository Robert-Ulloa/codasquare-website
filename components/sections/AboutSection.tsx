'use client'

import { motion } from 'framer-motion'
import { HiCode, HiCube, HiLightningBolt } from 'react-icons/hi'

const highlights = [
  {
    icon: HiCode,
    title: 'Full-Stack Developer',
    description: 'Years of experience building web and mobile applications with modern technologies.',
  },
  {
    icon: HiCube,
    title: 'Square API Expert',
    description: 'Deep expertise in Square\'s ecosystem — POS, payments, inventory, and customer management.',
  },
  {
    icon: HiLightningBolt,
    title: 'Small Business Focus',
    description: 'I build specifically for independent shops because I believe they deserve enterprise-level tools.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo / Visual placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto mb-4 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-5xl font-bold text-white">R</span>
                </div>
                <p className="text-primary-700 font-medium">Your photo here</p>
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
            <h2 className="heading-lg text-neutral-900 mb-6">
              Hi, I&apos;m <span className="text-primary-600">Roberto</span>
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-4">
              I started Coda Square because I saw independent coffee shops paying too much
              for software that didn&apos;t fit their needs. Generic apps with monthly fees that never felt quite right.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              I believe every shop deserves technology that works the way they do — not the other way around.
              That&apos;s why every project I take on is custom-built from the ground up,
              integrated with Square, and owned by you.
            </p>

            <div className="space-y-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">{item.title}</h3>
                    <p className="text-sm text-neutral-600">{item.description}</p>
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
