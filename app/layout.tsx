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
    generator: 'v0.dev'
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