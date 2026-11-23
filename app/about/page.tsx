import { pageMeta } from '@/lib/seo'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AboutSection from '@/components/sections/AboutSection'
import WhoThisIsForSection from '@/components/sections/WhoThisIsForSection'

export const metadata = pageMeta(
  'About CODA',
  'CODA builds affordable custom ordering apps and websites for independent businesses on Square, led by developer and QA engineer Roberto Ulloa.',
  '/about',
)

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutSection />
      <WhoThisIsForSection />
      <Footer />
    </main>
  )
}
