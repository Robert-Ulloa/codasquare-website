import { pageMeta } from '@/lib/seo'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HowItWorksSection from '@/components/sections/HowItWorksSection'

export const metadata = pageMeta(
  'How It Works: From Idea to Launch',
  'How CODA builds your custom ordering app and website: discovery, development with QA testing, launch on the App Store and Google Play, and full code ownership.',
  '/process',
)

export default function ProcessPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HowItWorksSection />
      <Footer />
    </main>
  )
}
