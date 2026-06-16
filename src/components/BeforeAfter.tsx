'use client'

import { motion, useReducedMotion } from 'framer-motion'

const gallery = [
  {
    src: '/images/after_before_concrete.webp',
    caption: 'Concrete tile repair — storm damage',
  },
  {
    src: '/images/after_before_roof.webp',
    caption: 'Tile roof repair & restoration',
  },
  {
    src: '/images/after_before_chimney.webp',
    caption: 'Chimney flashing repair & leak fix',
  },
]

export default function BeforeAfter() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-[#E8650A] font-display font-bold text-base tracking-widest uppercase mb-3">
            Our Work
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0F1E35] mb-4">
            Before & After
          </h2>
          <p className="text-slate-600 text-xl max-w-xl mx-auto leading-relaxed">
            Real repairs done by our team in the Atlanta area.
          </p>
        </div>

        <div className="space-y-8">
          {gallery.map((item, i) => (
            <motion.div
              key={item.caption}
              initial={reducedMotion ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full object-cover"
                loading="lazy"
              />
              <div className="px-5 py-4 border-t border-slate-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E8650A] flex-shrink-0" />
                <p className="text-slate-700 text-base font-semibold">{item.caption} — Atlanta, GA</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
