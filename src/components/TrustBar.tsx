'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Star, ShieldCheck, Home, FileText, Zap, MapPin } from 'lucide-react'

const items = [
  { icon: <Star className="w-5 h-5" strokeWidth={1.75} />, label: 'Highly Rated' },
  { icon: <ShieldCheck className="w-5 h-5" strokeWidth={1.75} />, label: 'Licensed & Insured' },
  { icon: <Home className="w-5 h-5" strokeWidth={1.75} />, label: 'Locally Owned' },
  { icon: <FileText className="w-5 h-5" strokeWidth={1.75} />, label: 'Written Estimates' },
  { icon: <Zap className="w-5 h-5" strokeWidth={1.75} />, label: 'Fast Response' },
  { icon: <MapPin className="w-5 h-5" strokeWidth={1.75} />, label: 'Serving Atlanta & Surrounding Areas' },
]

export default function TrustBar() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="bg-white border-y-2 border-orange-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-3">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={reducedMotion ? {} : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="flex items-center gap-2"
            >
              <span className="text-[#E8650A]">{item.icon}</span>
              <span className="text-slate-800 font-semibold text-base whitespace-nowrap">{item.label}</span>
              {i < items.length - 1 && (
                <span className="hidden lg:inline text-slate-300 ml-3 text-lg">|</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
