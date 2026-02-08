import Link from 'next/link'

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="container-custom py-32 max-w-3xl">
        <Link href="/" className="text-[#FCBF49] hover:text-[#F77F00] text-sm mb-8 inline-block transition-colors">
          &larr; Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-neutral-50 mb-8">Terms of Service</h1>
        <div className="prose prose-invert prose-neutral max-w-none space-y-6 text-neutral-300">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

          <h2 className="text-xl font-semibold text-neutral-50">Services</h2>
          <p>
            CODA x Square provides custom software development services including mobile apps, websites,
            and Square POS integrations for independent businesses. All project scope, timelines, and
            pricing are determined during the discovery phase and outlined in a project agreement.
          </p>

          <h2 className="text-xl font-semibold text-neutral-50">Code Ownership</h2>
          <p>
            Upon full payment and project delivery, you receive complete ownership of all source code,
            design assets, and content created for your project. You are free to modify, host, and
            maintain the code with any developer of your choosing.
          </p>

          <h2 className="text-xl font-semibold text-neutral-50">Payment</h2>
          <p>
            Payment terms are outlined in each project agreement. Payment plans are available.
            Exact pricing is determined after the discovery call based on project scope and complexity.
          </p>

          <h2 className="text-xl font-semibold text-neutral-50">Contact</h2>
          <p>
            Questions about these terms? Email us at{' '}
            <a href="mailto:Roanuc8@gmail.com" className="text-[#FCBF49] hover:text-[#F77F00] transition-colors">
              Roanuc8@gmail.com
            </a>.
          </p>
        </div>
      </div>
    </main>
  )
}
