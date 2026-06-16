'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Phone, MessageSquare, ChevronRight, CheckCircle2 } from 'lucide-react'
import Script from 'next/script'

export default function FinalCTA() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="estimate-form" className="bg-white py-20 lg:py-28 border-t-4 border-[#E8650A]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — copy */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 150, damping: 22 }}
          >
            <p className="text-[#E8650A] font-display font-bold text-base tracking-widest uppercase mb-4">
              Take Action Now
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0F1E35] mb-5 leading-tight">
              Schedule Your Free Roof Inspection Today
            </h2>
            <p className="text-slate-600 text-xl leading-relaxed mb-8">
              Protect your home before minor damage becomes a major expense. Our team is ready to
              inspect, assess, and give you an honest recommendation — no pressure.
            </p>

            {/* Call */}
            <div className="bg-[#0F1E35] rounded-2xl p-6 mb-5">
              <p className="text-slate-400 text-base mb-1">Call us directly:</p>
              <a
                href="tel:+16787558486"
                className="font-display font-bold text-3xl text-[#E8650A] hover:text-white transition-colors flex items-center gap-3"
              >
                <Phone className="w-7 h-7" strokeWidth={2} />
                (678) 755-8486
              </a>
            </div>

            {/* SMS */}
            <a
              href="sms:+16787558486?body=Hi, I need a free roof inspection"
              className="flex items-center gap-3 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-2xl p-5 mb-6 transition-colors group"
            >
              <MessageSquare className="w-7 h-7 text-[#0F1E35]" strokeWidth={2} />
              <div>
                <p className="font-display font-bold text-[#0F1E35] text-lg">Text Us Instead</p>
                <p className="text-slate-500 text-base">Tap to open your message app</p>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 ml-auto" strokeWidth={2} />
            </a>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {['Free Inspection', 'Licensed & Insured', 'No Obligation', 'Written Estimates', 'Same-Day Available'].map((badge) => (
                <span key={badge} className="flex items-center gap-1.5 bg-slate-100 text-slate-700 font-semibold text-base rounded-full px-4 py-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E8650A] flex-shrink-0" strokeWidth={2} />
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6, delay: 0.1, type: 'spring', stiffness: 150, damping: 22 }}
          >
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 shadow-sm" style={{ minHeight: 613 }}>
              <iframe
                src="https://api.gstf.us/widget/form/jTT8PpQaQmsBXpCKdn6h"
                style={{ width: '100%', height: '100%', border: 'none', minHeight: 613, boxShadow: 'none' }}
                id="inline-jTT8PpQaQmsBXpCKdn6h"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Form 0"
                data-height="613"
                data-layout-iframe-id="inline-jTT8PpQaQmsBXpCKdn6h"
                data-form-id="jTT8PpQaQmsBXpCKdn6h"
                title="Form 0"
              />
            </div>
            <Script src="https://api.gstf.us/js/form_embed.js" strategy="lazyOnload" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
