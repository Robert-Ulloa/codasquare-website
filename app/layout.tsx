import type { Metadata } from 'next'
import { Raleway, Playfair_Display } from 'next/font/google'
import Analytics from '@/components/Analytics'
import './globals.css'

const raleway = Raleway({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })

export const metadata: Metadata = {
  title: 'CODA for Square - Custom Apps & Websites for Independent Businesses',
  description: 'Purpose-built ordering apps and websites for independent and new businesses. No templates. No subscriptions. Built with Square integration.',
  keywords: ['custom ordering app', 'square integration', 'independent business website', 'mobile ordering', 'custom storefront'],
  authors: [{ name: 'Roberto - CODA for Square' }],
  openGraph: {
    title: 'CODA for Square - Custom Apps & Websites for Independent Businesses',
    description: 'Purpose-built ordering apps and websites for independent and new businesses.',
    url: 'https://codasquare.com',
    siteName: 'CODA for Square',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/coda-logo-mark.png',
        width: 1536,
        height: 1024,
        alt: 'CODA for Square',
      },
    ],
  },
  icons: {
    icon: '/images/coda-logo-mark.png',
    shortcut: '/images/coda-logo-mark.png',
    apple: '/images/coda-logo-mark.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CODA for Square - Custom Apps & Websites for Independent Businesses',
    description: 'Purpose-built ordering apps and websites for independent and new businesses.',
    images: ['/images/coda-logo-mark.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${raleway.variable} ${playfair.variable} font-sans`}>
        <Analytics />
        {children}
      </body>
    </html>
  )
}
