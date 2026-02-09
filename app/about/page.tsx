import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AboutSection from '@/components/sections/AboutSection'
import WhoThisIsForSection from '@/components/sections/WhoThisIsForSection'

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
