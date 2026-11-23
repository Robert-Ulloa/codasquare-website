import { pageMeta } from '@/lib/seo'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SolutionSection from '@/components/sections/SolutionSection'
import FeaturesSection from '@/components/sections/FeaturesSection'

export const metadata = pageMeta(
  'Custom Ordering App & Website Solutions',
  'Branded mobile ordering apps, ordering websites and Square POS integration for independent businesses. Built for how you work, with no monthly platform fees.',
  '/solutions',
)

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SolutionSection />
      <FeaturesSection />
      <Footer />
    </main>
  )
}
