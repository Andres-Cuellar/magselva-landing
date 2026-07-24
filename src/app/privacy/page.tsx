import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy — Mag Selva Inc',
  robots: 'index, follow',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#E8650A] hover:text-[#CF5408] font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>

        <p className="text-sm text-slate-500 mb-8">Last updated: July 23, 2026</p>

        <section className="space-y-6 text-slate-700 leading-relaxed">
          <p>
            Mag Selva Inc (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy. This Privacy Policy explains how we
            collect, use, and protect your information when you visit our website.
          </p>

          <h2 className="font-display text-xl font-bold text-slate-900 pt-4">1. Information We Collect</h2>
          <p>
            When you fill out our contact form or call us, we collect the information you provide: your name, phone
            number, email address, and service details. We also collect certain information automatically through
            cookies and similar tracking technologies.
          </p>

          <h2 className="font-display text-xl font-bold text-slate-900 pt-4">2. Google Ads &amp; Cookies</h2>
          <p>
            We use Google Ads conversion tracking to measure the effectiveness of our advertising campaigns. Google
            Ads places a cookie on your browser when you click on one of our ads. This cookie helps us understand
            which ads lead to inquiries and allows us to optimize our campaigns.
          </p>
          <p>
            We also use Google Consent Mode via Cookiebot to manage your consent preferences. When you visit our
            site, you will be asked to consent to the use of cookies and tracking technologies. Your choices are
            stored and respected.
          </p>

          <h2 className="font-display text-xl font-bold text-slate-900 pt-4">3. Why We Collect This Data</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To respond to your service inquiries and provide roof repair estimates</li>
            <li>To measure and optimize our advertising campaigns</li>
            <li>To improve our website and user experience</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2 className="font-display text-xl font-bold text-slate-900 pt-4">4. Third-Party Services</h2>
          <p>We use the following third-party services on our website:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Google Ads</strong> — for advertising and conversion tracking.{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E8650A] hover:underline"
              >
                Google Privacy Policy
              </a>
            </li>
            <li>
              <strong>Cookiebot</strong> — for consent management.{' '}
              <a
                href="https://www.cookiebot.com/en/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E8650A] hover:underline"
              >
                Cookiebot Privacy Policy
              </a>
            </li>
          </ul>

          <h2 className="font-display text-xl font-bold text-slate-900 pt-4">5. Your Rights</h2>
          <p>
            Depending on your location, you may have the right to access, correct, delete, or port your personal
            data. You may also withdraw consent at any time by adjusting your cookie preferences on our website or
            by contacting us directly.
          </p>

          <h2 className="font-display text-xl font-bold text-slate-900 pt-4">6. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your information. However, no method of
            transmission over the Internet is 100% secure.
          </p>

          <h2 className="font-display text-xl font-bold text-slate-900 pt-4">7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul className="list-none space-y-1">
            <li><strong>Phone:</strong> <a href="tel:+16787558486" className="text-[#E8650A] hover:underline">(678) 755-8486</a></li>
            <li><strong>Email:</strong> <a href="mailto:info@magselva.com" className="text-[#E8650A] hover:underline">info@magselva.com</a></li>
          </ul>
        </section>
      </div>
    </main>
  )
}
