import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coda Square - Custom Apps & Websites for Coffee Shops',
  description: 'Purpose-built ordering apps and websites for coffee shops and cafes. No templates. No subscriptions. Built with Square integration.',
  keywords: ['coffee shop app', 'square integration', 'custom ordering app', 'cafe website', 'mobile ordering'],
  authors: [{ name: 'Roberto - Coda Square' }],
  openGraph: {
    title: 'Coda Square - Custom Apps & Websites for Coffee Shops',
    description: 'Purpose-built ordering apps and websites for coffee shops and cafes.',
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
