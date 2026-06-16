'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Phone, MessageSquare } from 'lucide-react'

export default function StickyCallButton() {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={reducedMotion ? {} : { y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 1 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex"
    >
      {/* Call */}
      <a
        href="tel:+16787558486"
        className="flex-1 flex items-center justify-center gap-2 bg-[#E8650A] hover:bg-[#CF5408] active:bg-[#b84a07] text-white font-display font-bold text-lg py-5 transition-colors"
      >
        <Phone className="w-5 h-5" strokeWidth={2} />
        Call Now
      </a>

      {/* Divider */}
      <div className="w-0.5 bg-[#CF5408] flex-shrink-0" />

      {/* SMS */}
      <a
        href="sms:+16787558486?body=Hi, I need a free roof inspection"
        className="flex-1 flex items-center justify-center gap-2 bg-[#0F1E35] hover:bg-[#1A3060] active:bg-[#0a1628] text-white font-display font-bold text-lg py-5 transition-colors"
      >
        <MessageSquare className="w-5 h-5" strokeWidth={2} />
        Text Us
      </a>
    </motion.div>
  )
}
