'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Layers, Sparkles, Droplets, SquareStack, Building2, CloudRain } from 'lucide-react'

const problems = [
  {
    icon: <Layers className="w-7 h-7" strokeWidth={1.75} />,
    title: 'Cracked Concrete Tiles',
    description: 'Broken or displaced concrete tiles allow water to penetrate and cause hidden damage beneath.',
  },
  {
    icon: <Sparkles className="w-7 h-7" strokeWidth={1.75} />,
    title: 'Clay Tile Damage',
    description: 'Aging clay tiles, storm damage, and improper prior repairs often lead to recurring leaks.',
  },
  {
    icon: <Droplets className="w-7 h-7" strokeWidth={1.75} />,
    title: 'Active Roof Leaks',
    description: 'Water intrusion spreads quickly and creates expensive damage to ceilings, walls, and floors.',
  },
  {
    icon: <SquareStack className="w-7 h-7" strokeWidth={1.75} />,
    title: 'Underlayment Failure',
    description: 'The waterproof layer beneath your tiles can deteriorate over time, leaving your home vulnerable.',
  },
  {
    icon: <Building2 className="w-7 h-7" strokeWidth={1.75} />,
    title: 'Chimney Leaks',
    description: 'Damaged flashing and chimney deterioration are among the most common causes of roof leaks.',
  },
  {
    icon: <CloudRain className="w-7 h-7" strokeWidth={1.75} />,
    title: 'Gutter Problems',
    description: 'Improper drainage damages your roof, fascia, foundation, and landscaping over time.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 200, damping: 22 } },
}

export default function CommonProblems() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-[#E8650A] font-display font-bold text-base tracking-widest uppercase mb-3">
            We&apos;ve Seen It All
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0F1E35] mb-4">
            Common Roof Problems We Fix
          </h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Specialists in tile, concrete, and clay roofing — the most common roof types in Atlanta.
          </p>
        </div>

        <motion.div
          variants={reducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {problems.map((p) => (
            <motion.div
              key={p.title}
              variants={reducedMotion ? {} : cardVariants}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-[#E8650A]/50 hover:shadow-md transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#E8650A]/10 text-[#E8650A] flex items-center justify-center mb-4">
                {p.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-[#0F1E35] mb-2">{p.title}</h3>
              <p className="text-slate-600 text-base leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
