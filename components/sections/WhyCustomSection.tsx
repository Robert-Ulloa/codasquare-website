'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const comparisons = [
  { feature: 'Pricing', custom: 'Project-based, payment plans available', whiteLabel: '$400/month + % per order' },
  { feature: 'Design', custom: 'Unique to your brand', whiteLabel: 'Cookie-cutter template' },
  { feature: 'Features', custom: 'Built for your workflow', whiteLabel: 'Limited & generic' },
  { feature: 'If you cancel', custom: 'You keep everything', whiteLabel: 'You lose access' },
  { feature: '5-year cost', custom: 'One payment, done', whiteLabel: '$12,000+ and counting' },
]

export default function WhyCustomSection() {
  const [calculator, setCalculator] = useState({
    revenue: 1000000,
    monthlyFee: 400,
    transactionRate: 2,
    years: 5,
    customCost: 15000,
  })

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value)

  const { whiteLabelTotal, customTotal, savings } = useMemo(() => {
    const annualTransactionCost = (calculator.revenue * calculator.transactionRate) / 100
    const annualFee = calculator.monthlyFee * 12
    const whiteLabelAnnual = annualTransactionCost + annualFee
    const whiteLabelTotalValue = whiteLabelAnnual * calculator.years
    const customTotalValue = calculator.customCost
    return {
      whiteLabelTotal: whiteLabelTotalValue,
      customTotal: customTotalValue,
      savings: whiteLabelTotalValue - customTotalValue,
    }
  }, [calculator])

  return (
    <section className="section-padding section-snap bg-neutral-950 text-neutral-100 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -bottom-24 right-[-8%] h-80 w-80 rounded-full bg-[#F77F00]/15 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-neutral-50 mb-4">
            Custom vs. White-Label: <span className="text-[#FCBF49]">There&apos;s No Contest</span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            White-label apps rent you someone else&apos;s software. We build something that&apos;s yours — permanently.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white/5 border border-white/10 rounded-2xl shadow-lg overflow-hidden">
            {/* Header row */}
            <div className="grid grid-cols-3 bg-neutral-900 text-white">
              <div className="p-4 font-semibold"></div>
              <div className="p-4 font-semibold text-center bg-[#003049]">CODA for Square</div>
              <div className="p-4 font-semibold text-center">White-Label Apps</div>
            </div>

            {/* Rows */}
            {comparisons.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`grid grid-cols-3 ${
                  index % 2 === 0 ? 'bg-white/5' : 'bg-white/0'
                }`}
              >
                <div className="p-4 text-sm text-neutral-200 font-medium">{row.feature}</div>
                <div className="p-4 text-sm text-[#FCBF49] font-medium text-center bg-white/5">
                  {row.custom}
                </div>
                <div className="p-4 text-sm text-neutral-400 text-center">
                  {row.whiteLabel}
                </div>
              </motion.div>
            ))}
          </div>

          {/* ROI Calculation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
          >
            <h3 className="text-lg font-bold text-neutral-50 mb-4">The Math Speaks for Itself</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div>
                <p className="text-sm text-neutral-400 mb-1">White-label at $400/mo</p>
                <p className="text-2xl font-bold text-[#D62828]">$24,000</p>
                <p className="text-xs text-neutral-500">over 5 years (plus % per transaction)</p>
                <p className="text-xs text-neutral-500 mt-2">
                  Example: 2% on $1M/year = $20,000 + $4,800 annual fee = $24,800/year.
                </p>
              </div>
              <div className="text-3xl font-bold text-neutral-600">vs.</div>
              <div>
                <p className="text-sm text-neutral-400 mb-1">CODA for Square custom build</p>
                <p className="text-2xl font-bold text-[#FCBF49]">Project-based</p>
                <p className="text-xs text-neutral-500">yours forever, payment plans available</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-lg font-bold text-neutral-50">Compare Your Real Costs</h3>
              <p className="text-sm text-neutral-400 mt-2">
                Use your numbers to see how white-label fees add up over time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <label className="text-sm text-neutral-300">
                Annual Revenue
                <input
                  type="number"
                  min={0}
                  step={1000}
                  value={calculator.revenue}
                  onChange={(event) => setCalculator({ ...calculator, revenue: Number(event.target.value) })}
                  className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#FCBF49]"
                />
              </label>

              <label className="text-sm text-neutral-300">
                White-label Monthly Fee
                <input
                  type="number"
                  min={0}
                  step={50}
                  value={calculator.monthlyFee}
                  onChange={(event) => setCalculator({ ...calculator, monthlyFee: Number(event.target.value) })}
                  className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#FCBF49]"
                />
              </label>

              <label className="text-sm text-neutral-300">
                Transaction % Fee
                <input
                  type="number"
                  min={0}
                  step={0.1}
                  value={calculator.transactionRate}
                  onChange={(event) => setCalculator({ ...calculator, transactionRate: Number(event.target.value) })}
                  className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#FCBF49]"
                />
              </label>

              <label className="text-sm text-neutral-300">
                Time Horizon (Years)
                <input
                  type="number"
                  min={1}
                  step={1}
                  value={calculator.years}
                  onChange={(event) => setCalculator({ ...calculator, years: Number(event.target.value) })}
                  className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#FCBF49]"
                />
              </label>

              <label className="text-sm text-neutral-300">
                Custom Build Cost (Professional)
                <input
                  type="number"
                  min={0}
                  step={500}
                  value={calculator.customCost}
                  onChange={(event) => setCalculator({ ...calculator, customCost: Number(event.target.value) })}
                  className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#FCBF49]"
                />
              </label>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <p className="text-sm text-neutral-400">White-label total</p>
                <p className="text-2xl font-bold text-[#D62828] mt-2">{formatCurrency(whiteLabelTotal)}</p>
                <p className="text-xs text-neutral-500 mt-1">Over {calculator.years} years</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <p className="text-sm text-neutral-400">Custom build total</p>
                <p className="text-2xl font-bold text-[#FCBF49] mt-2">{formatCurrency(customTotal)}</p>
                <p className="text-xs text-neutral-500 mt-1">One-time</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <p className="text-sm text-neutral-400">Estimated savings</p>
                <p className="text-2xl font-bold text-neutral-50 mt-2">{formatCurrency(savings)}</p>
                <p className="text-xs text-neutral-500 mt-1">Before maintenance add-ons</p>
              </div>
            </div>

            <p className="text-xs text-neutral-500 mt-6 text-center">
              Estimates only. Final pricing depends on scope and integration needs.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
