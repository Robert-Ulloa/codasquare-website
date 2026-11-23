import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'
import ProofSection from '@/components/sections/ProofSection'
import WhyCustomSection from '@/components/sections/WhyCustomSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import FAQSection from '@/components/sections/FAQSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <ProofSection />
      <WhyCustomSection />
      <HowItWorksSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
