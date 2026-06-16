'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Phone, MessageSquare, CalendarCheck } from 'lucide-react'

export default function FloatingQuoteBtn() {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={reducedMotion ? {} : { scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 2 }}
      className="fixed bottom-6 right-6 z-50 hidden md:flex items-center gap-2"
    >
      {/* Call */}
      <motion.a
        href="tel:+16787558486"
        whileHover={reducedMotion ? {} : { y: -4, boxShadow: '0 12px 24px rgba(15,30,53,0.5)' }}
        whileTap={reducedMotion ? {} : { scale: 0.92 }}
        title="Call us"
        className="w-12 h-12 flex items-center justify-center bg-[#0F1E35] text-white rounded-full shadow-lg transition-shadow duration-200"
      >
        <Phone className="w-5 h-5" strokeWidth={2} />
      </motion.a>

      {/* SMS */}
      <motion.a
        href="sms:+16787558486?body=Hi, I need a free roof inspection"
        whileHover={reducedMotion ? {} : { y: -4, boxShadow: '0 12px 24px rgba(15,30,53,0.5)' }}
        whileTap={reducedMotion ? {} : { scale: 0.92 }}
        title="Send us a text"
        className="w-12 h-12 flex items-center justify-center bg-[#0F1E35] text-white rounded-full shadow-lg transition-shadow duration-200"
      >
        <MessageSquare className="w-5 h-5" strokeWidth={2} />
      </motion.a>

      {/* Get Free Quote */}
      <motion.a
        href="#estimate-form"
        whileHover={reducedMotion ? {} : { y: -4, boxShadow: '0 12px 30px rgba(232,101,10,0.4)' }}
        whileTap={reducedMotion ? {} : { scale: 0.95 }}
        className="flex items-center gap-2 bg-[#E8650A] text-white font-display font-bold text-sm px-5 py-3 rounded-full shadow-lg shadow-[#E8650A]/30 transition-shadow duration-200"
      >
        <CalendarCheck className="w-4 h-4" strokeWidth={2} />
        Get Free Quote
      </motion.a>
    </motion.div>
  )
}
