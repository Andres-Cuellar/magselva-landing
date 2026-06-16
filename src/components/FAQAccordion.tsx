'use client'

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Do I need a complete roof replacement?',
    a: 'Not always. Many roofing issues — even significant leaks — can be repaired without replacing the entire roof. During your free inspection, we assess the tiles, underlayment, and flashing and recommend only what is truly necessary.',
  },
  {
    q: 'How much does roof repair cost?',
    a: 'Costs vary depending on the extent of the damage, the type of tile, and the area affected. We provide detailed written estimates after every inspection so you know exactly what to expect before any work begins. No surprises.',
  },
  {
    q: 'How quickly can you inspect my roof?',
    a: 'In many cases we can schedule inspections within a short timeframe. If you have an active leak or emergency storm damage, contact us right away and we will prioritize your situation.',
  },
  {
    q: 'Do you repair concrete and clay tile roofs?',
    a: 'Yes. Concrete, clay, and tile roofing systems are our specialty. Our team has extensive experience with the specific techniques and materials required for these roof types common in the Atlanta area.',
  },
  {
    q: 'Do you offer emergency repairs?',
    a: 'Yes. If your roof has active leaks or has sustained storm damage, contact us immediately. We offer emergency services to stop water intrusion and prevent further damage to your home.',
  },
]

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0)
  const reducedMotion = useReducedMotion()

  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-[#E8650A] font-display font-bold text-base tracking-widest uppercase mb-3">
            Got Questions?
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0F1E35]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={reducedMotion ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`bg-white border-2 rounded-2xl overflow-hidden transition-colors duration-200 ${open === i ? 'border-[#E8650A]' : 'border-slate-200'}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-slate-50 transition-colors duration-200"
                aria-expanded={open === i}
              >
                <span className="font-display font-bold text-[#0F1E35] text-lg sm:text-xl leading-tight">{faq.q}</span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={reducedMotion ? {} : { duration: 0.25 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-[#E8650A]" strokeWidth={2.5} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={reducedMotion ? {} : { height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={reducedMotion ? {} : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="h-px bg-slate-200 mb-4" />
                      <p className="text-slate-600 text-lg leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
