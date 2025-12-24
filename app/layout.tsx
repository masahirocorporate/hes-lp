import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import { Suspense } from 'react'
import './globals.css'
import { TargetProvider } from '@/contexts/TargetContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Anker SOLIX XJ | 家庭用蓄電池',
  description: '2025年、住宅の「標準装備」が変わる。太陽光＋蓄電池は、これからの住宅に欠かせない設備です。',
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJp.variable}`}>
      <body className="antialiased">
        <Suspense fallback={<div className="min-h-screen bg-base-white" />}>
          <TargetProvider>
            {children}
          </TargetProvider>
        </Suspense>
      </body>
    </html>
  )
}
