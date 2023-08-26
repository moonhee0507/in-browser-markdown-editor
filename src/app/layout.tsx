import './globals.css'
import type { Metadata } from 'next'
import { Roboto, Roboto_Slab, Roboto_Mono } from 'next/font/google'

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-roboto",
  display: "swap"
})
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-roboto-slab",
  display: "swap"
})
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto-mono",
  display: "swap"
})

export const metadata: Metadata = {
  title: 'Markdown Editor',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${robotoSlab.variable} ${robotoMono.variable}`}>{children}</body>
    </html>
  )
}

