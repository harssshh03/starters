import type { Metadata } from "next"
import { Bricolage_Grotesque, Geist } from "next/font/google"

import "./globals.css"

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
})

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Starter's Snippets",
  description:
    "Generate starter files and boilerplate code for your projects, and skip the repetitive setup.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  )
}