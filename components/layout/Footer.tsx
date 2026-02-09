import Link from 'next/link'
import { FaLinkedin, FaGlobe, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = {
    solutions: [
      { label: 'Solutions', href: '/solutions#solutions' },
      { label: 'Features', href: '/solutions#features' },
      { label: 'Process', href: '/process#how-it-works' },
    ],
    company: [
      { label: 'About', href: '/about#about' },
      { label: 'Who This Is For', href: '/about' },
      { label: 'Work', href: '/work#work' },
      { label: 'Pricing', href: '/pricing#pricing' },
      { label: 'Contact', href: '/contact#contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Refund Policy', href: '/refund' },
    ],
  }

  return (
    <footer className="bg-neutral-950 text-neutral-300">
      <div className="container-custom py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="col-span-1">
            <div className="text-2xl font-bold text-[#EAE2B7] mb-4 flex items-baseline gap-2">
              CODA
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">for</span>
              <span className="text-[#F77F00]">Square</span>
            </div>
            <p className="text-sm mb-4">
              Custom apps and websites built for independent and new businesses.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/roberto-ulloa/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FCBF49] transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://robertoulloa.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FCBF49] transition-colors"
                aria-label="Portfolio"
              >
                <FaGlobe className="w-5 h-5" />
              </a>
              <a
                href="mailto:Roanuc8@gmail.com"
                className="hover:text-[#FCBF49] transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {footerSections.solutions.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[#FCBF49] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerSections.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[#FCBF49] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerSections.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[#FCBF49] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-center md:text-left">
              © {currentYear} CODA for Square. Built with care for independent and new businesses.
            </p>
            <p className="text-sm text-center md:text-right">
              Based in London • Serving the United States
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
