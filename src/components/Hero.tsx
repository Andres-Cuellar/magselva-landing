'use client'

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Phone, CalendarCheck, Check } from 'lucide-react'
import { useEffect, useState } from 'react'

const heroImages = [
  '/images/hero/20221103_181530.webp',
  '/images/hero/20221119_172605.webp',
  '/images/hero/20221201_094334.webp',
  '/images/hero/20230218_143118.webp',
]

const bullets = [
  'Free Roof Inspection',
  'Licensed & Insured',
  'Same-Day Estimates Available',
  'Emergency Service Available',
]

const INTERVAL = 5000

export default function Hero() {
  const reducedMotion = useReducedMotion()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (reducedMotion) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length)
    }, INTERVAL)
    return () => clearInterval(timer)
  }, [reducedMotion])

  return (
    <section className="relative bg-[#0F1E35] overflow-hidden min-h-[600px] sm:min-h-[700px] lg:min-h-[780px]">
      {/* Slideshow */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImages[current]})` }}
          aria-hidden="true"
        />
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F1E35]/95 via-[#0F1E35]/85 to-[#0F1E35]/60" />

      {/* Orange accent bar top */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#E8650A] z-10" />

      {/* Slide dots */}
      <div className="absolute bottom-20 right-6 z-10 flex flex-col gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? 'bg-[#E8650A] scale-125' : 'bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-28 lg:py-36">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.p
            initial={reducedMotion ? {} : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[#E8650A] font-display font-bold text-base sm:text-lg tracking-wide uppercase mb-5"
          >
            Atlanta&apos;s Trusted Roofing Specialists
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, type: 'spring', stiffness: 100, damping: 20 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-white mb-5"
          >
            <span className="text-[#E8650A]">Roof Leak?</span>{' '}
            <span className="text-[#E8650A]">Broken Tile?</span>
            <br />
            Get a Free Inspection Today.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={reducedMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-slate-200 text-xl sm:text-2xl leading-relaxed mb-8"
          >
            Don&apos;t wait until a small problem becomes a major repair.
            No pressure. No obligation. Just honest answers.
          </motion.p>

          {/* Bullets */}
          <motion.ul
            initial={reducedMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
          >
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-slate-100 text-lg">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E8650A] flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <div className="relative">
              {!reducedMotion && (
                <motion.span
                  animate={{ scale: [1, 1.5], opacity: [0.45, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                  className="absolute inset-0 rounded-xl bg-[#E8650A] pointer-events-none"
                />
              )}
              <a
                href="#estimate-form"
                className="relative flex items-center justify-center gap-2 bg-[#E8650A] hover:bg-[#CF5408] active:bg-[#b84a07] text-white font-display font-bold text-xl px-8 py-5 rounded-xl transition-colors shadow-lg shadow-[#E8650A]/30"
              >
                <CalendarCheck className="w-5 h-5" strokeWidth={2} />
                Get My Free Inspection
              </a>
            </div>

            <a
              href="tel:+16787558486"
              className="flex items-center justify-center gap-3 border-2 border-white/30 hover:border-white/60 active:bg-white/10 text-white font-display font-bold text-xl px-8 py-5 rounded-xl transition-all"
            >
              <Phone className="w-5 h-5 text-[#E8650A]" strokeWidth={2} />
              (678) 755-8486
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
    </section>
  )
}
