import Link from 'next/link'

export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="container-custom py-32 max-w-3xl">
        <Link href="/" className="text-[#FCBF49] hover:text-[#F77F00] text-sm mb-8 inline-block transition-colors">
          &larr; Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-neutral-50 mb-8">Refund Policy</h1>
        <div className="prose prose-invert prose-neutral max-w-none space-y-6 text-neutral-300">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

          <h2 className="text-xl font-semibold text-neutral-50">Project-Based Work</h2>
          <p>
            Each project follows a phased approach with clear milestones. If you decide to cancel before
            development begins, any unused portion of your deposit will be refunded. Once development
            has started, refunds are prorated based on work completed.
          </p>

          <h2 className="text-xl font-semibold text-neutral-50">Satisfaction Guarantee</h2>
          <p>
            We work collaboratively with weekly check-ins and approval gates at each milestone.
            If the final deliverable does not match the agreed-upon scope, we will make it right
            at no additional cost.
          </p>

          <h2 className="text-xl font-semibold text-neutral-50">Maintenance Plans</h2>
          <p>
            Monthly maintenance plans can be cancelled at any time with 30 days notice.
            No long-term contracts required.
          </p>

          <h2 className="text-xl font-semibold text-neutral-50">Contact</h2>
          <p>
            Questions about refunds? Email us at{' '}
            <a href="mailto:Roanuc8@gmail.com" className="text-[#FCBF49] hover:text-[#F77F00] transition-colors">
              Roanuc8@gmail.com
            </a>.
          </p>
        </div>
      </div>
    </main>
  )
}
