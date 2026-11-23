'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiMenu, HiX } from 'react-icons/hi'
import { analytics } from '@/lib/analytics'
import { CodaLogo } from '@/components/brand/Logo'

const navLinks = [
  { href: '/solutions', label: 'Solutions' },
  { href: '/process', label: 'How It Works' },
  { href: '/work', label: 'Work' },
  { href: '/pricing', label: 'Packages' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    const handleKey = (event: KeyboardEvent) => event.key === 'Escape' && setIsMobileMenuOpen(false)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('keydown', handleKey)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKey)
    }
  }, [])

  useEffect(() => setIsMobileMenuOpen(false), [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'border-white/10 bg-[#06080f]/75 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="container-custom flex h-[72px] items-center justify-between" aria-label="Primary">
        <Link href="/" aria-label="CODA for Square, home" className="transition-transform hover:scale-[1.02]">
          <CodaLogo />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`group relative py-1 text-[0.95rem] font-semibold transition-colors ${
                  active ? 'text-white' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded-full bg-gradient-to-r from-coda-red to-coda-amber shadow-[0_0_10px_rgba(255,61,111,.7)] transition-transform duration-300 ${
                    active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            )
          })}
          <Link
            href="/contact"
            onClick={() => analytics.ctaClick('Free Quote', 'header')}
            className="btn-primary px-5 py-2.5 text-sm"
          >
            Get a free quote
          </Link>
        </div>

        <button
          className="-mr-2 p-2 text-neutral-200 hover:text-white md:hidden"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="container-custom pb-6 md:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-white/10 py-4 text-lg font-semibold text-neutral-200 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary mt-5 w-full">
              Get a free quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
