'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const reviews = [
  {
    name: 'Maria G.',
    city: 'Marietta, GA',
    rating: 5,
    text: "Found a leak after a storm and was worried about the cost. Mag Selva came out the same week, found two cracked tiles and repaired everything for a fair price. No upselling — just honest work. Highly recommend.",
    avatar: 'M',
  },
  {
    name: 'James T.',
    city: 'Alpharetta, GA',
    rating: 5,
    text: "We kept getting quotes for full roof replacement. Mag Selva inspected it and said we only needed underlayment work and a few tiles replaced. Saved us thousands. These people are honest.",
    avatar: 'J',
  },
  {
    name: 'Sandra R.',
    city: 'Roswell, GA',
    rating: 5,
    text: "Chimney leak was causing water damage inside the house. They identified the flashing problem quickly and fixed it the same week. Clear communication throughout. Will definitely call again.",
    avatar: 'S',
  },
]

export default function Reviews() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="bg-[#0F1E35] py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-[#E8650A] font-display font-bold text-base tracking-widest uppercase mb-3">
            Real Homeowners
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-yellow-400 text-3xl tracking-wide">★★★★★</p>
          <p className="text-slate-300 text-lg mt-1">Highly rated by Atlanta homeowners</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={reducedMotion ? {} : { opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, type: 'spring', stiffness: 180, damping: 22 }}
              className="bg-white rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="text-yellow-400 text-xl">{'★'.repeat(r.rating)}</div>

              <p className="text-slate-700 text-lg leading-relaxed flex-1">
                &ldquo;{r.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-200">
                <div className="w-11 h-11 rounded-full bg-[#0F1E35] flex items-center justify-center text-white font-display font-bold text-lg">
                  {r.avatar}
                </div>
                <div>
                  <p className="text-[#0F1E35] font-bold text-base">{r.name}</p>
                  <p className="text-slate-500 text-sm flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#E8650A]" strokeWidth={2} />
                    {r.city}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
