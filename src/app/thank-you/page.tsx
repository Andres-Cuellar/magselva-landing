import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { Phone, MessageSquare, CheckCircle2, ArrowLeft, Shield, FileText, Clock, Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Thank You — Mag Selva Inc',
  robots: 'noindex, nofollow',
}

const perks = [
  { icon: Search, label: 'Free Inspection' },
  { icon: Shield, label: 'Licensed & Insured' },
  { icon: CheckCircle2, label: 'No Obligation' },
  { icon: FileText, label: 'Written Estimates' },
  { icon: Clock, label: 'Same-Day Available' },
]

export default function ThankYouPage() {
  return (
    <>
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`gtag('event', 'conversion', {'send_to': 'AW-786881918/x5cUCKrTtNUcEP66m_cC'});`}
      </Script>
      <main className="min-h-screen bg-[#0F1E35] flex flex-col">
      <div className="flex-1 flex items-center justify-center px-5 sm:px-8 py-16">
        <div className="w-full max-w-2xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 mb-8">
            <CheckCircle2 className="w-8 h-8 text-emerald-400" strokeWidth={2} />
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            You&apos;re on the List
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
            Protect your home before minor damage becomes a major expense. Our team is ready to inspect, assess,
            and give you an honest recommendation — <span className="text-white font-semibold">no pressure</span>.
          </p>

          <div className="bg-white/5 border border-slate-700/50 rounded-2xl p-8 sm:p-10 mb-8">
            <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-4">Call us directly</p>

            <a
              href="tel:+16787558486"
              className="inline-flex items-center justify-center gap-3 bg-[#E8650A] hover:bg-[#CF5408] text-white font-display font-bold text-2xl sm:text-3xl px-8 py-5 rounded-xl transition-colors w-full sm:w-auto mb-6"
            >
              <Phone className="w-6 h-6" strokeWidth={2} />
              (678) 755-8486
            </a>

            <div className="border-t border-slate-700/50 pt-6">
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-3">Text Us Instead</p>
              <a
                href="sms:+16787558486"
                className="inline-flex items-center justify-center gap-2 text-[#E8650A] hover:text-[#CF5408] font-medium transition-colors"
              >
                <MessageSquare className="w-5 h-5" strokeWidth={2} />
                Tap to open your message app
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
            {perks.map((perk) => (
              <div
                key={perk.label}
                className="flex items-center justify-center gap-2 bg-white/5 border border-slate-700/50 rounded-xl px-4 py-3"
              >
                <perk.icon className="w-4 h-4 text-emerald-400 shrink-0" strokeWidth={2} />
                <span className="text-slate-300 text-sm font-medium">{perk.label}</span>
              </div>
            ))}
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-[#E8650A] transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      <footer className="py-8 px-5 sm:px-8 text-center">
        <p className="text-slate-600 text-xs">
          &copy; {new Date().getFullYear()} Mag Selva Inc. All rights reserved.{' '}
          <Link href="/privacy" className="text-slate-500 hover:text-[#E8650A] transition-colors underline underline-offset-2">
            Privacy Policy
          </Link>
        </p>
      </footer>
    </main>
    </>
  )
}
