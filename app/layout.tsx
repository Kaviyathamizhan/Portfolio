import type { Metadata } from 'next'
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono, Anton, Bebas_Neue, Allura, Great_Vibes, Alex_Brush, Sacramento } from 'next/font/google'
import './globals.css'
import { seoData } from '@/lib/data'
import { AnimatedBackground } from '@/components/shared'
import { CommandPalette } from '@/components/ui/CommandPalette'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
})

const anton = Anton({
  weight: '400',
  variable: '--font-anton',
  subsets: ['latin'],
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  weight: '400',
  variable: '--font-bebas',
  subsets: ['latin'],
  display: 'swap',
})

const alexBrush = Alex_Brush({
  weight: '400',
  variable: '--font-signature',
  subsets: ['latin'],
  display: 'swap',
})

const allura = Allura({
  weight: '400',
  variable: '--font-allura',
  subsets: ['latin'],
  display: 'swap',
})

const greatVibes = Great_Vibes({
  weight: '400',
  variable: '--font-great-vibes',
  subsets: ['latin'],
  display: 'swap',
})

const sacramento = Sacramento({
  weight: '400',
  variable: '--font-sacramento',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: seoData.title,
  description: seoData.description,
  keywords: seoData.keywords,
  openGraph: {
    title: seoData.title,
    description: seoData.description,
    url: seoData.canonicalUrl,
    siteName: seoData.title,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: seoData.title,
    description: seoData.description,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} ${anton.variable} ${bebasNeue.variable} ${alexBrush.variable} ${allura.variable} ${greatVibes.variable} ${sacramento.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-text-primary relative selection:bg-primary/20 selection:text-primary">
        <CommandPalette />
        <AnimatedBackground />
        <div className="relative z-10 flex flex-col min-h-full">{children}</div>
      </body>
    </html>
  )
}
