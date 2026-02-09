'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { HiMenu, HiX } from 'react-icons/hi'
import { analytics } from '@/lib/analytics'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/solutions', label: 'Solutions' },
    { href: '/process', label: 'How It Works' },
    { href: '/work', label: 'Work' },
    { href: '/pricing', label: 'Pricing' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-neutral-950/90 backdrop-blur-md shadow-lg shadow-black/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-[#EAE2B7] flex items-baseline gap-2">
              CODA
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">for</span>
              <span className="text-[#F77F00]">Square</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-200 hover:text-[#FCBF49] transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => analytics.ctaClick('Book Consultation', 'header')}
              className="btn-primary"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-200 hover:text-[#FCBF49]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-neutral-950/95 backdrop-blur-md rounded-lg shadow-lg border border-white/10">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-neutral-200 hover:text-[#FCBF49] transition-colors font-medium px-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4">
                <Link
                  href="/contact"
                  className="btn-primary w-full text-center block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
