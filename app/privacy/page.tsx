import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="container-custom py-32 max-w-3xl">
        <Link href="/" className="text-[#FCBF49] hover:text-[#F77F00] text-sm mb-8 inline-block transition-colors">
          &larr; Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-neutral-50 mb-8">Privacy Policy</h1>
        <div className="prose prose-invert prose-neutral max-w-none space-y-6 text-neutral-300">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

          <h2 className="text-xl font-semibold text-neutral-50">Information We Collect</h2>
          <p>
            When you use our contact form, we collect the information you provide: your name, email address,
            business name, number of locations, service interest, and any additional message. We use this
            information solely to respond to your inquiry and schedule a consultation.
          </p>

          <h2 className="text-xl font-semibold text-neutral-50">How We Use Your Information</h2>
          <p>
            We use your information to respond to your consultation request, communicate about potential projects,
            and improve our services. We do not sell, rent, or share your personal information with third parties.
          </p>

          <h2 className="text-xl font-semibold text-neutral-50">Analytics</h2>
          <p>
            We use Google Analytics to understand how visitors interact with our website. This collects
            anonymous usage data such as pages visited and time spent on site. You can opt out by using
            a browser extension or enabling Do Not Track.
          </p>

          <h2 className="text-xl font-semibold text-neutral-50">Contact</h2>
          <p>
            Questions about this policy? Email us at{' '}
            <a href="mailto:Roanuc8@gmail.com" className="text-[#FCBF49] hover:text-[#F77F00] transition-colors">
              Roanuc8@gmail.com
            </a>.
          </p>
        </div>
      </div>
    </main>
  )
}
