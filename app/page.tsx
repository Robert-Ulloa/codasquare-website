import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'
import WhyCustomSection from '@/components/sections/WhyCustomSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <WhyCustomSection />
      <Footer />
    </main>
  )
}
