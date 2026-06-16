'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { PlayCircle, Check } from 'lucide-react'

// Replace YOUR_VIDEO_ID with your actual YouTube video ID
// Example: if your video URL is https://www.youtube.com/watch?v=dQw4w9WgXcQ
// then VIDEO_ID = "dQw4w9WgXcQ"
const VIDEO_ID: string = '1r6rgFwr--A'

export default function VideoSection() {
  const reducedMotion = useReducedMotion()
  const hasVideo = VIDEO_ID !== 'YOUR_VIDEO_ID'

  return (
    <section className="bg-[#0F1E35] py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-10">
          <p className="text-[#E8650A] font-display font-bold text-base tracking-widest uppercase mb-3">
            See Us In Action
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Watch How We Work
          </h2>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed">
            See exactly how our team diagnoses and repairs tile roofs — no surprises, no pressure.
          </p>
        </div>

        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 150, damping: 20 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          {hasVideo ? (
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
                title="Mag Selva Inc — Roof Repair"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          ) : (
            <div className="aspect-video bg-slate-800 flex flex-col items-center justify-center gap-5">
              <PlayCircle className="w-20 h-20 text-[#E8650A]" strokeWidth={1.5} />
              <div className="text-center px-6">
                <p className="text-white font-display font-bold text-xl mb-2">
                  Add your YouTube video here
                </p>
                <p className="text-slate-400 text-base">
                  Edit <code className="text-[#E8650A]">VideoSection.tsx</code> and replace{' '}
                  <code className="text-[#E8650A]">YOUR_VIDEO_ID</code> with your YouTube video ID
                </p>
              </div>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={reducedMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mt-10"
        >
          {['Free to Schedule', 'No Obligation', 'Same-Day Available', 'Licensed Team'].map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-slate-300 text-base">
              <Check className="w-4 h-4 text-[#E8650A]" strokeWidth={2.5} />
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
