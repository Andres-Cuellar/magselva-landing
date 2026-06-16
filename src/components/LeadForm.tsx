'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false)
  const reducedMotion = useReducedMotion()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    console.log('Lead form submission:', Object.fromEntries(data))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={reducedMotion ? {} : { opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white border-2 border-[#E8650A] rounded-2xl p-10 text-center shadow-xl"
      >
        <div className="text-6xl mb-4">✅</div>
        <h3 className="font-display font-bold text-2xl text-[#0F1E35] mb-3">Request Received!</h3>
        <p className="text-slate-600 text-lg leading-relaxed">
          We&apos;ll contact you shortly to schedule your free roof inspection. Need immediate help? Call us at{' '}
          <a href="tel:+16787558486" className="text-[#E8650A] font-bold">
            (678) 755-8486
          </a>
          .
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-[#0F1E35] font-bold text-lg mb-2">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Smith"
            className="w-full rounded-xl px-4 py-4 text-lg border border-slate-300 focus:outline-none focus:border-[#E8650A] transition-colors"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-[#0F1E35] font-bold text-lg mb-2">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(678) 555-0100"
            className="w-full rounded-xl px-4 py-4 text-lg border border-slate-300 focus:outline-none focus:border-[#E8650A] transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-[#0F1E35] font-bold text-lg mb-2">
          Email Address *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="john@example.com"
          className="w-full rounded-xl px-4 py-4 text-lg border border-slate-300 focus:outline-none focus:border-[#E8650A] transition-colors"
        />
      </div>

      <div>
        <label htmlFor="address" className="block text-[#0F1E35] font-bold text-lg mb-2">
          Property Address
        </label>
        <input
          id="address"
          name="address"
          type="text"
          placeholder="123 Main St, Atlanta, GA"
          className="w-full rounded-xl px-4 py-4 text-lg border border-slate-300 focus:outline-none focus:border-[#E8650A] transition-colors"
        />
      </div>

      <div>
        <label htmlFor="issue" className="block text-[#0F1E35] font-bold text-lg mb-2">
          Describe Your Roof Issue
        </label>
        <textarea
          id="issue"
          name="issue"
          rows={4}
          placeholder="Describe what you're experiencing — leaks, broken tiles, storm damage..."
          className="w-full rounded-xl px-4 py-4 text-lg border border-slate-300 focus:outline-none focus:border-[#E8650A] transition-colors resize-none"
        />
      </div>

      <motion.button
        type="submit"
        whileHover={reducedMotion ? {} : { scale: 1.02 }}
        whileTap={reducedMotion ? {} : { scale: 0.98 }}
        className="w-full bg-[#E8650A] hover:bg-[#CF5408] active:bg-[#b84a07] text-white font-display font-bold text-xl py-5 rounded-xl transition-colors shadow-lg shadow-[#E8650A]/25"
      >
        Request My Free Estimate
      </motion.button>

      <p className="text-slate-500 text-base text-center">
        No Obligation. No Pressure. Just Honest Roofing Solutions.
      </p>
    </form>
  )
}
