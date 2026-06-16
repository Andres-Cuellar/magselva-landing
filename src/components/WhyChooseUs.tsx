'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ShieldCheck, Users, Zap, Award, BadgeCheck, HeartHandshake } from 'lucide-react'

const reasons = [
  {
    icon: <ShieldCheck className="w-6 h-6" strokeWidth={1.75} />,
    title: 'Honest Assessments',
    description: "We recommend repairs when repairs are possible. We don't push unnecessary replacements.",
  },
  {
    icon: <Users className="w-6 h-6" strokeWidth={1.75} />,
    title: 'Experienced Professionals',
    description: 'Our team specializes exclusively in tile, concrete, and clay roofing systems.',
  },
  {
    icon: <Zap className="w-6 h-6" strokeWidth={1.75} />,
    title: 'Fast Response Times',
    description: "Roof problems don't wait. Neither should you. We respond quickly to every call.",
  },
  {
    icon: <Award className="w-6 h-6" strokeWidth={1.75} />,
    title: 'Quality Materials',
    description: 'We use durable materials designed to withstand Georgia weather conditions year-round.',
  },
  {
    icon: <BadgeCheck className="w-6 h-6" strokeWidth={1.75} />,
    title: 'Licensed & Insured',
    description: 'Your home is fully protected throughout the entire repair process.',
  },
  {
    icon: <HeartHandshake className="w-6 h-6" strokeWidth={1.75} />,
    title: 'Customer-First Approach',
    description: 'Clear communication. Fair pricing. Reliable workmanship. Every time.',
  },
]

export default function WhyChooseUs() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-[#E8650A] font-display font-bold text-base tracking-widest uppercase mb-3">
            The Mag Selva Difference
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0F1E35] mb-4">
            Why Atlanta Homeowners Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={reducedMotion ? {} : { opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06, type: 'spring', stiffness: 160, damping: 22 }}
              className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-[#E8650A]/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E8650A]/10 text-[#E8650A] flex items-center justify-center mb-4">
                {r.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-[#0F1E35] mb-2">{r.title}</h3>
              <p className="text-slate-600 text-base leading-relaxed">{r.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 rounded-2xl overflow-hidden shadow-lg relative"
        >
          <img
            src="/images/hero/20230218_143118.webp"
            alt="Mag Selva roofing team working on an Atlanta home"
            className="w-full h-64 sm:h-80 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1E35]/80 to-transparent flex items-center px-8 sm:px-14">
            <div>
              <p className="text-white font-display font-bold text-2xl sm:text-3xl mb-2">
                Your Home. Our Expertise.
              </p>
              <p className="text-slate-200 text-lg max-w-sm">
                Every inspection is done by experienced roofing professionals — not salespeople.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
