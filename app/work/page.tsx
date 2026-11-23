import { pageMeta } from '@/lib/seo'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PortfolioSection from '@/components/sections/PortfolioSection'

export const metadata = pageMeta(
  'Work & Case Studies',
  "Custom ordering apps and Square integrations built by CODA, including Nimble Chicago's iOS and Android app, which grew orders by 35% after launch.",
  '/work',
)

export default function WorkPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PortfolioSection />
      <Footer />
    </main>
  )
}
