'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Phone, CalendarDays, ClipboardList, Hammer, CalendarCheck } from 'lucide-react'

const steps = [
  {
    number: '1',
    icon: <Phone className="w-7 h-7" strokeWidth={1.75} />,
    title: 'Call or Fill the Form',
    description: 'Contact us by phone or submit the form below.',
  },
  {
    number: '2',
    icon: <CalendarDays className="w-7 h-7" strokeWidth={1.75} />,
    title: 'Schedule Your Inspection',
    description: 'We schedule your free roof inspection at a convenient time for you.',
  },
  {
    number: '3',
    icon: <ClipboardList className="w-7 h-7" strokeWidth={1.75} />,
    title: 'Get a Written Estimate',
    description: 'Receive an honest assessment and a clear, detailed written estimate.',
  },
  {
    number: '4',
    icon: <Hammer className="w-7 h-7" strokeWidth={1.75} />,
    title: 'Repairs Done Right',
    description: 'Approve the work and let our team handle everything. No surprises.',
  },
]

export default function HowItWorks() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-[#E8650A] font-display font-bold text-base tracking-widest uppercase mb-3">
            Simple & Transparent
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0F1E35] mb-3">
            How It Works
          </h2>
          <p className="text-slate-600 text-xl">Four easy steps. No surprises.</p>
        </div>

        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-1 bg-slate-200 rounded-full">
            <motion.div
              initial={reducedMotion ? {} : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.3 }}
              className="absolute inset-0 bg-[#E8650A] origin-left rounded-full"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={reducedMotion ? {} : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, type: 'spring', stiffness: 180, damping: 22 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-24 h-24 rounded-full bg-[#0F1E35] border-4 border-[#E8650A] flex flex-col items-center justify-center mb-5 shadow-lg text-white gap-0.5">
                  {step.icon}
                  <span className="text-[#E8650A] font-bold text-xs leading-none">Step {step.number}</span>
                </div>

                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute top-24 left-1/2 -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-[#E8650A]/60 to-transparent rounded-full" />
                )}

                <h3 className="font-display font-bold text-xl text-[#0F1E35] mb-2">{step.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed max-w-[200px]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

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
            Start With Step 1 — Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}
