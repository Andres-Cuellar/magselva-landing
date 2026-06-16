'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Droplets, AlertTriangle, TreeDeciduous, LayoutDashboard, Wrench, TrendingDown } from 'lucide-react'

const consequences = [
  { icon: <Droplets className="w-5 h-5" strokeWidth={1.75} />, label: 'Interior Water Damage' },
  { icon: <AlertTriangle className="w-5 h-5" strokeWidth={1.75} />, label: 'Mold Growth' },
  { icon: <TreeDeciduous className="w-5 h-5" strokeWidth={1.75} />, label: 'Rotting Wood Structures' },
  { icon: <LayoutDashboard className="w-5 h-5" strokeWidth={1.75} />, label: 'Ceiling Damage' },
  { icon: <Wrench className="w-5 h-5" strokeWidth={1.75} />, label: 'Costly Structural Repairs' },
  { icon: <TrendingDown className="w-5 h-5" strokeWidth={1.75} />, label: 'Expensive Restoration' },
]

export default function ProblemAwareness() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.p
          initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#E8650A] font-display font-bold text-base tracking-widest uppercase mb-4"
        >
          Don&apos;t Ignore the Signs
        </motion.p>

        <motion.h2
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0F1E35] leading-tight mb-6"
        >
          Many homeowners don&apos;t realize their roof is damaged until{' '}
          <span className="text-[#E8650A]">water stains appear inside.</span>
        </motion.h2>

        <motion.p
          initial={reducedMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-600 text-xl leading-relaxed mb-6 max-w-3xl mx-auto"
        >
          By that point, moisture may already be affecting insulation, wood structures, and interior
          finishes. Most problems can be repaired before they become major expenses — but only if you act early.
        </motion.p>

        <motion.p
          initial={reducedMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[#0F1E35] font-bold text-xl mb-10"
        >
          A small leak today can quickly become:
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
          {consequences.map((item, i) => (
            <motion.div
              key={item.label}
              initial={reducedMotion ? {} : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm"
            >
              <span className="text-[#E8650A] flex-shrink-0">{item.icon}</span>
              <span className="text-slate-800 font-semibold text-base text-left">{item.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block bg-[#0F1E35] text-white rounded-2xl px-8 py-5"
        >
          <p className="text-xl font-semibold">
            The sooner you call, the easier — and less expensive — the fix.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
