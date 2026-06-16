'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Check, CalendarCheck, Layers, Gem, Hammer, ShieldCheck, Flame, CloudRain } from 'lucide-react'

const services = [
  {
    icon: <Layers className="w-6 h-6" strokeWidth={1.75} />,
    title: 'Concrete Roof Repair',
    description: 'Cracked, broken, loose, and storm-damaged concrete roof tiles.',
    items: ['Leak Detection', 'Tile Replacement', 'Flashing Repair', 'Storm Damage', 'Preventive Maintenance'],
    image: '/images/concrete.webp',
  },
  {
    icon: <Gem className="w-6 h-6" strokeWidth={1.75} />,
    title: 'Clay Roof Repair',
    description: 'Expert repair for the beauty and performance of your clay tile roof.',
    items: ['Clay Tile Replacement', 'Leak Repair', 'Flashing Repair', 'Structural Corrections', 'Roof Restoration'],
    image: '/images/clay.webp',
  },
  {
    icon: <Hammer className="w-6 h-6" strokeWidth={1.75} />,
    title: 'Tile Roof Repair',
    description: 'We find the source of leaks and provide long-lasting repair solutions.',
    items: ['Broken Tile Repair', 'Valley Repairs', 'Roof Penetrations', 'Flashing Replacement', 'Storm Damage'],
    image: '/images/tile.webp',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" strokeWidth={1.75} />,
    title: 'Underlayment Replacement',
    description: "Extend your roof's life without the cost of a full replacement.",
    items: ['Improved Waterproofing', 'Longer Roof Lifespan', 'Better Energy Efficiency', 'Fewer Future Leaks'],
    image: '/images/underlayment.webp',
  },
  {
    icon: <Flame className="w-6 h-6" strokeWidth={1.75} />,
    title: 'Chimney Repair',
    description: 'Stop chimney leaks before they cause extensive water damage.',
    items: ['Flashing Repair', 'Mortar Repair', 'Leak Prevention', 'Water Intrusion', 'Crown Repair'],
    image: '/images/chimney.webp',
  },
  {
    icon: <CloudRain className="w-6 h-6" strokeWidth={1.75} />,
    title: 'Gutter Repair & Copper Gutters',
    description: 'Proper drainage protects your entire home — roof to foundation.',
    items: ['Gutter Repairs', 'Leak Repairs', 'Downspout Repairs', 'Copper Installation', 'Copper Repair'],
    image: '/images/copper.webp',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 180, damping: 22 } },
}

export default function Services() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-[#E8650A] font-display font-bold text-base tracking-widest uppercase mb-3">
            What We Do
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0F1E35] mb-4">
            Our Specialized Services
          </h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Complete tile, concrete, and clay roof repair for Atlanta-area homeowners.
          </p>
        </div>

        <motion.div
          variants={reducedMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={reducedMotion ? {} : cardVariants}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-44 bg-slate-200 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#0F1E35]/40" />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-[#E8650A] text-white flex items-center justify-center shadow-lg">
                  {s.icon}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-display font-bold text-xl text-[#0F1E35] mb-2">{s.title}</h3>
                <p className="text-slate-600 text-base mb-4 leading-relaxed">{s.description}</p>
                <p className="text-[#E8650A] text-xs font-bold uppercase tracking-wide mb-2">Includes:</p>
                <ul className="space-y-1.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-700 text-base">
                      <Check className="w-4 h-4 text-[#E8650A] flex-shrink-0" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-14"
        >
          <a
            href="#estimate-form"
            className="inline-flex items-center gap-2 bg-[#E8650A] hover:bg-[#CF5408] text-white font-display font-bold text-xl px-10 py-5 rounded-xl transition-colors shadow-lg shadow-[#E8650A]/20"
          >
            <CalendarCheck className="w-5 h-5" strokeWidth={2} />
            Schedule My Free Inspection
          </a>
        </motion.div>
      </div>
    </section>
  )
}
