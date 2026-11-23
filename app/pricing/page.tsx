import { pageMeta } from '@/lib/seo'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PricingSection from '@/components/sections/PricingSection'
import FAQSection from '@/components/sections/FAQSection'

export const metadata = pageMeta(
  'Packages: Custom Apps Without Monthly Fees',
  'Project-based packages for custom ordering apps and websites. Free quotes, payment plans, no monthly platform fees and no cut of your orders.',
  '/pricing',
)

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <Header />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
