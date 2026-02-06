'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker, HiCalendar } from 'react-icons/hi'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    shopName: '',
    locations: '1',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Connect to Formspree, Basin, or Resend
    // For now, just show success state
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg mb-6">
              Let&apos;s Build Something <span className="text-accent-300">Great</span>
            </h2>
            <p className="text-xl text-primary-100 leading-relaxed mb-8">
              Book a free 30-minute consultation. We&apos;ll talk about your shop, your goals,
              and whether Coda Square is the right fit. No pressure, no sales pitch.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <HiMail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-200">Email</p>
                  <a href="mailto:hello@codasquare.com" className="font-medium hover:text-accent-300 transition-colors">
                    hello@codasquare.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <HiCalendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-200">Response time</p>
                  <p className="font-medium">Within 24 hours</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <HiLocationMarker className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-200">Based in</p>
                  <p className="font-medium">London, serving the United States</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiMail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-primary-100">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours to schedule your free consultation.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 space-y-5"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-100 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    placeholder="Jane Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-100 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    placeholder="jane@mycoffeeshop.com"
                  />
                </div>

                <div>
                  <label htmlFor="shopName" className="block text-sm font-medium text-primary-100 mb-1">
                    Shop Name
                  </label>
                  <input
                    type="text"
                    id="shopName"
                    value={formData.shopName}
                    onChange={(e) => setFormData({ ...formData, shopName: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    placeholder="My Coffee Shop"
                  />
                </div>

                <div>
                  <label htmlFor="locations" className="block text-sm font-medium text-primary-100 mb-1">
                    Number of Locations
                  </label>
                  <select
                    id="locations"
                    value={formData.locations}
                    onChange={(e) => setFormData({ ...formData, locations: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  >
                    <option value="1" className="text-neutral-900">1 location</option>
                    <option value="2-3" className="text-neutral-900">2–3 locations</option>
                    <option value="4-10" className="text-neutral-900">4–10 locations</option>
                    <option value="10+" className="text-neutral-900">10+ locations</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-100 mb-1">
                    Tell me about your project
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent resize-none"
                    placeholder="What are you looking for? Online ordering, mobile app, website...?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent-500 text-white py-3 rounded-lg font-semibold hover:bg-accent-600 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Book Free Consultation
                </button>

                <p className="text-xs text-primary-200 text-center">
                  Free 30-minute call. No commitment required.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
