import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'
import SolutionSection from '@/components/sections/SolutionSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import WhyCustomSection from '@/components/sections/WhyCustomSection'
import WhoThisIsForSection from '@/components/sections/WhoThisIsForSection'
import PricingSection from '@/components/sections/PricingSection'
import AboutSection from '@/components/sections/AboutSection'
import FAQSection from '@/components/sections/FAQSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PortfolioSection />
      <WhyCustomSection />
      <WhoThisIsForSection />
      <PricingSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
