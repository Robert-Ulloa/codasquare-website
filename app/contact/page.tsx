import { pageMeta } from '@/lib/seo'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ContactSection from '@/components/sections/ContactSection'

export const metadata = pageMeta(
  'Get a Free Quote',
  'Tell us about your business and get a free, no-obligation quote for a custom ordering app or website connected to Square.',
  '/contact',
)

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactSection />
      <Footer />
    </main>
  )
}
