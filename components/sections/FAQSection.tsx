'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'

const faqs = [
  {
    question: 'How long does it take to build my app and website?',
    answer:
      'Most projects take 8–12 weeks from kickoff to launch. The Essential tier (website only) can be ready in as little as 6 weeks. We\'ll give you a specific timeline during our discovery call.',
  },
  {
    question: 'Do I really own the code?',
    answer:
      'Yes, 100%. Once we deliver your project, you own every line of code, every design asset, and every piece of content. No lock-in, no licensing fees. It\'s yours.',
  },
  {
    question: 'What if I need changes after launch?',
    answer:
      'Every project includes a post-launch support period (30–60 days depending on your tier). After that, we offer optional maintenance plans starting at $200/month, or you can hire any developer to make changes — you own the code.',
  },
  {
    question: 'How does the Square integration work?',
    answer:
      'We connect directly to Square\'s API so your online orders, menu items, inventory, and customer data sync automatically with your POS. When you update a menu item in Square, it updates on your app and website instantly.',
  },
  {
    question: 'Can I use this without Square?',
    answer:
      'We specialize in Square integrations, but we can build with other POS systems too. Let\'s chat about your setup during the discovery call and we\'ll find the best approach.',
  },
  {
    question: 'What\'s included in the maintenance plan?',
    answer:
      'Maintenance plans cover hosting management, security updates, bug fixes, small feature tweaks, and performance monitoring. It\'s peace of mind so you can focus on running your shop.',
  },
  {
    question: 'Do you work with shops outside the US?',
    answer:
      'Currently we focus on coffee shops in the United States where Square is widely used. If you\'re international and use Square, reach out — we\'re happy to discuss.',
  },
  {
    question: 'What makes you different from agencies?',
    answer:
      'Agencies build everything for everyone. We build one thing — custom digital tools for coffee shops using Square. That focus means we understand your industry, your customers, and your workflow better than any generalist.',
  },
]

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-neutral-200 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-5 text-left"
      >
        <span className="text-lg font-medium text-neutral-900 pr-4">{faq.question}</span>
        <HiChevronDown
          className={`w-5 h-5 text-neutral-500 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-neutral-600 leading-relaxed pb-5">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-neutral-900 mb-4">
            Frequently Asked <span className="text-primary-600">Questions</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Everything you need to know before getting started.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
