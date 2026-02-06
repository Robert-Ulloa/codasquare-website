import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coda Square - Custom Apps & Websites for Independent Businesses',
  description: 'Purpose-built ordering apps and websites for independent and new businesses. No templates. No subscriptions. Built with Square integration.',
  keywords: ['custom ordering app', 'square integration', 'independent business website', 'mobile ordering', 'custom storefront'],
  authors: [{ name: 'Roberto - Coda Square' }],
  openGraph: {
    title: 'Coda Square - Custom Apps & Websites for Independent Businesses',
    description: 'Purpose-built ordering apps and websites for independent and new businesses.',
    url: 'https://codasquare.com',
    siteName: 'Coda Square',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
