import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SolutionSection from '@/components/sections/SolutionSection'
import FeaturesSection from '@/components/sections/FeaturesSection'

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
