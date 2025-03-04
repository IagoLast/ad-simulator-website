import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import './db-init'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AD SIMULATOR - A Battlefield Full of Ads",
  description:
    "Join the waitlist for AD SIMULATOR - a pixel art battle royale game where everything is an advertisement. Sponsored weapons, company-paid upgrades, and the winner takes all!",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'