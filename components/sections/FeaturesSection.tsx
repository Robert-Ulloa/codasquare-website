"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const tiers = [
  {
    name: "Essential",
    description:
      "A focused launch kit to get your brand online and taking orders — typically live in 6 weeks.",
    features: [
      "Custom online ordering site",
      "Square menu sync",
      "Branded domain setup",
      "Mobile-first UX",
    ],
    bestFor: "New concepts and first-time online ordering.",
  },
  {
    name: "Professional",
    description:
      "A complete digital experience designed to increase repeat visits and average order value.",
    features: [
      "Everything in Essential",
      "Native iOS & Android apps",
      "Loyalty and rewards",
      "Customer analytics dashboard",
    ],
    bestFor: "Growing teams ready to increase repeat orders.",
    popular: true,
  },
  {
    name: "Enterprise",
    description:
      "A scalable platform that unifies operations across every location.",
    features: [
      "Everything in Professional",
      "Multi-location management",
      "Custom API integrations",
      "Dedicated support & SLA",
    ],
    bestFor: "Multi-unit operators and complex workflows.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="section-padding section-snap bg-neutral-950 text-neutral-100 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute -top-32 right-[-10%] h-80 w-80 rounded-full bg-[#F77F00]/20 blur-3xl" />
        <div className="absolute -bottom-24 left-[-12%] h-96 w-96 rounded-full bg-[#D62828]/20 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#FCBF49]/15 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm uppercase tracking-[0.2em] text-[#FCBF49] mb-4"
          >
            Service Tiers
          </motion.p>
          <h2 className="heading-lg text-neutral-50 mb-4">What You Get</h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Clear tiers built to match your stage, each designed to feel premium
            without extra complexity.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              whileHover={{ y: -6 }}
              className={`relative rounded-2xl p-8 border backdrop-blur ${
                tier.popular
                  ? "bg-white/10 border-[#FCBF49]/50 shadow-[0_20px_60px_rgba(252,191,73,0.15)]"
                  : "bg-white/5 border-white/10 hover:border-white/20"
              }`}
            >
              <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-40">
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#EAE2B7] to-transparent" />
              </div>

              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FCBF49] text-neutral-950 text-sm font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-neutral-50 mb-2">
                  {tier.name}
                </h3>
                <p className="text-neutral-300">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#F77F00] flex-shrink-0" />
                    <span className="text-neutral-200 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm font-medium text-neutral-100">
                <span className="text-neutral-400">Best for: </span>
                {tier.bestFor}
              </p>

              <Link
                href="/pricing"
                className={`mt-6 block text-center w-full py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  tier.popular
                    ? "bg-[#FCBF49] text-neutral-950 hover:bg-[#F77F00] shadow-md hover:shadow-lg"
                    : "bg-white/10 text-neutral-200 hover:bg-white/20 border border-white/10"
                }`}
              >
                See Pricing
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
