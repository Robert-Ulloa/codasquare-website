'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
        isScrolled ? 'bg-transparent py-2' : 'bg-transparent py-3'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Go to home" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="CODA logo"
              width={1536}
              height={1024}
              priority
              className="block h-[124px] md:h-[144px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-200 hover:text-[#FCBF49] transition-colors font-medium text-lg"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => analytics.ctaClick('Book Consultation', 'header')}
              className="btn-primary text-base px-7 py-3"
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
