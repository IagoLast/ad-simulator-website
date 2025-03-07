import type React from "react"
import type { Metadata } from "next"
import { Play, Press_Start_2P } from "next/font/google"
import "./globals.css"
import './db-init'

const play = Play({ 
  weight: ['400', '700'],
  subsets: ["latin"],
  display: 'swap',
})
const pressStart = Press_Start_2P({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-press-start',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "AD SIMULATOR - A Battlefield Full of Ads",
  description:
    "Join the waitlist for AD SIMULATOR - a pixel art FPS shooter where you capture the flag in a world dominated by advertisements. Battle through billboard-filled arenas!",
    generator: 'v0.dev',
    metadataBase: new URL('https://ad-simulator.com'),
    authors: [{ name: 'AD SIMULATOR Team' }],
    keywords: ['fps', 'shooter', 'capture the flag', 'pixel art', 'gaming', 'ads', 'advertising', 'simulator'],
    creator: 'AD SIMULATOR Team',
    publisher: 'AD SIMULATOR',
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://ad-simulator.com',
      title: 'AD SIMULATOR - Capture the flag in a map full of ads',
      description: 'The ultimate game for solo-founders. Infiltrate enemy territory, seize their flag, and navigate back to your base while fighting off opponents in a world of ads!',
      siteName: 'AD SIMULATOR',
      images: [
        {
          url: '/images/og_image.png',
          width: 1200,
          height: 630,
          alt: 'AD SIMULATOR - Capture the flag in a map full of ads'
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'AD SIMULATOR - Capture the flag in a map full of ads',
      description: 'The ultimate game for solo-founders. Join the waitlist for this pixel art FPS shooter where you battle through billboard-filled arenas!',
      images: ['/images/og_image.png'],
      creator: '@adsimulator',
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${play.className} ${pressStart.variable}`}>{children}</body>
    </html>
  )
}



import './globals.css'