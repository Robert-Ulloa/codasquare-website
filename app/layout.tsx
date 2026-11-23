import type { Metadata, Viewport } from 'next'
import { Manrope, DM_Mono } from 'next/font/google'
import Analytics from '@/components/Analytics'
import Effects from '@/components/layout/Effects'
import { siteName, siteUrl } from '@/lib/seo'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const dmMono = DM_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' })

const title = 'Custom Ordering Apps & Websites for Independent Businesses'
const description =
  'Affordable custom ordering apps and websites for independent businesses, connected to Square. No monthly platform fees, no templates, and you own the code.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${title} | ${siteName}`, template: `%s | ${siteName}` },
  description,
  keywords: [
    'custom ordering app',
    'affordable custom app for small business',
    'Square online ordering app',
    'custom app without monthly fees',
    'independent business website',
    'mobile ordering app for restaurants and cafés',
    'Square integration developer',
    'white-label app alternative',
  ],
  authors: [{ name: 'Roberto Ulloa', url: 'https://robertoulloa.com' }],
  creator: 'Roberto Ulloa',
  alternates: { canonical: '/' },
  openGraph: {
    title: `${title} | ${siteName}`,
    description,
    url: '/',
    siteName,
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CODA for Square: custom ordering apps and websites' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | ${siteName}`,
    description,
    images: ['/og-image.png'],
  },
  icons: { icon: '/icon.svg' },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = { themeColor: '#06080f' }

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: siteName,
  url: siteUrl,
  description,
  logo: `${siteUrl}/icon.svg`,
  image: `${siteUrl}/og-image.png`,
  founder: { '@type': 'Person', name: 'Roberto Ulloa', url: 'https://robertoulloa.com' },
  areaServed: 'US',
  serviceType: ['Custom mobile ordering apps', 'Custom business websites', 'Square POS integration'],
  sameAs: ['https://robertoulloa.com', 'https://www.linkedin.com/in/roberto-antonio-ulloa-cruz-30135b317/'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmMono.variable}`}>
      <body className="font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Effects />
        <Analytics />
        {children}
      </body>
    </html>
  )
}
