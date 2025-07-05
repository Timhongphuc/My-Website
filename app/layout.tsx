import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tim Seufert - High School Developer",
  description:
    "Portfolio of Tim Seufert, a passionate high school developer interested in programming, AI research, and technology.",
  keywords: ["Tim Seufert", "developer", "portfolio", "programming", "Swift", "iOS", "web development"],
  authors: [{ name: "Tim Seufert" }],
  creator: "Tim Seufert",
  openGraph: {
    title: "Tim Seufert - High School Developer",
    description: "Portfolio of Tim Seufert, a passionate high school developer",
    url: "https://timseufert.de",
    siteName: "Tim Seufert Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tim Seufert - High School Developer",
    description: "Portfolio of Tim Seufert, a passionate high school developer",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
