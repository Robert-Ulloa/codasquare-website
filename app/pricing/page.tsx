import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PricingSection from '@/components/sections/PricingSection'
import FAQSection from '@/components/sections/FAQSection'

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
