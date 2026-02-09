'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiLocationMarker, HiCalendar } from 'react-icons/hi'
import { analytics } from '@/lib/analytics'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    shopName: '',
    locations: '1',
    interest: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [formStarted, setFormStarted] = useState(false)

  // Listen for pricing tier clicks to pre-fill the form
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail
      if (detail?.tier) {
        setFormData((prev) => ({
          ...prev,
          message: prev.message
            ? prev.message
            : `Interested in the ${detail.tier} tier.`,
        }))
      }
    }
    window.addEventListener('prefill-contact', handler)
    return () => window.removeEventListener('prefill-contact', handler)
  }, [])

  // Track first form interaction
  const handleFormInteraction = () => {
    if (!formStarted) {
      setFormStarted(true)
      analytics.formStart()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID

    if (!formspreeId) {
      // No Formspree ID configured — show success for development
      console.warn('NEXT_PUBLIC_FORMSPREE_ID not set. Form data:', formData)
      analytics.formSubmit()
      setSubmitted(true)
      setSubmitting(false)
      return
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          business_name: formData.shopName,
          locations: formData.locations,
          interest: formData.interest,
          message: formData.message,
        }),
      })

      if (response.ok) {
        analytics.formSubmit()
        setSubmitted(true)
      } else {
        analytics.formError('submission_failed')
        setError('Something went wrong. Please try emailing us directly.')
      }
    } catch {
      analytics.formError('network_error')
      setError('Network error. Please try emailing us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding section-snap bg-neutral-950 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-24 right-[-8%] h-80 w-80 rounded-full bg-[#D62828]/20 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[10%] h-96 w-96 rounded-full bg-[#F77F00]/20 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg mb-6">
              Let&apos;s Build Something <span className="text-[#FCBF49]">Great</span>
            </h2>
            <p className="text-xl text-neutral-300 leading-relaxed mb-8">
              Book a free 30-minute consultation. You&apos;ll speak directly with Roberto — the
              developer who&apos;ll actually build your project. No sales team, no runaround.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center border border-white/10">
                  <HiMail className="w-5 h-5 text-[#FCBF49]" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Email</p>
                  <a href="mailto:Roanuc8@gmail.com" className="font-medium hover:text-[#FCBF49] transition-colors">
                    Roanuc8@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center border border-white/10">
                  <HiCalendar className="w-5 h-5 text-[#FCBF49]" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Response time</p>
                  <p className="font-medium">Within 24 hours</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center border border-white/10">
                  <HiLocationMarker className="w-5 h-5 text-[#FCBF49]" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Serving</p>
                  <p className="font-medium">Independent businesses across the United States</p>
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
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
                <div className="w-16 h-16 bg-[#FCBF49] rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiMail className="w-8 h-8 text-neutral-950" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-neutral-300">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours to schedule your free consultation.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                onChange={handleFormInteraction}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 space-y-5"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#FCBF49] focus:border-transparent"
                    placeholder="Jane Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#FCBF49] focus:border-transparent"
                    placeholder="jane@mybusiness.com"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="shopName" className="block text-sm font-medium text-neutral-300 mb-1">
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="shopName"
                      value={formData.shopName}
                      onChange={(e) => setFormData({ ...formData, shopName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#FCBF49] focus:border-transparent"
                      placeholder="My Business"
                    />
                  </div>

                  <div>
                    <label htmlFor="locations" className="block text-sm font-medium text-neutral-300 mb-1">
                      Locations
                    </label>
                    <select
                      id="locations"
                      value={formData.locations}
                      onChange={(e) => setFormData({ ...formData, locations: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#FCBF49] focus:border-transparent"
                    >
                      <option value="1" className="text-neutral-900">1 location</option>
                      <option value="2-3" className="text-neutral-900">2–3 locations</option>
                      <option value="4-10" className="text-neutral-900">4–10 locations</option>
                      <option value="10+" className="text-neutral-900">10+ locations</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-neutral-300 mb-1">
                    What are you interested in?
                  </label>
                  <select
                    id="interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#FCBF49] focus:border-transparent"
                  >
                    <option value="" className="text-neutral-900">Select a service...</option>
                    <option value="website" className="text-neutral-900">Custom website</option>
                    <option value="app" className="text-neutral-900">Mobile app</option>
                    <option value="both" className="text-neutral-900">Website + mobile app</option>
                    <option value="square-optimization" className="text-neutral-900">Square system optimization</option>
                    <option value="consulting" className="text-neutral-900">Technical consulting</option>
                    <option value="not-sure" className="text-neutral-900">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-1">
                    Anything else?
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#FCBF49] focus:border-transparent resize-none"
                    placeholder="Tell me about your business and what you're looking for..."
                  />
                </div>

                {error && (
                  <p className="text-sm text-[#D62828] text-center">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#FCBF49] text-neutral-950 py-3 rounded-lg font-semibold hover:bg-[#F77F00] transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Sending...' : 'Book Free Consultation'}
                </button>

                <p className="text-xs text-neutral-400 text-center">
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
