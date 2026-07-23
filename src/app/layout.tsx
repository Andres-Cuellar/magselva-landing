import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Free Roof Inspection — Mag Selva Inc | Atlanta Tile & Concrete Roof Repair',
  description:
    "Atlanta's trusted tile, concrete & clay roof repair specialists. Free inspection, same-day estimates. Licensed & insured. Don't let a small leak become a major expense.",
  robots: 'index, follow',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sora.variable}>
      <body className="font-sans">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-786881918"
          strategy="afterInteractive"
        />
        <Script id="google-ads-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-786881918');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
