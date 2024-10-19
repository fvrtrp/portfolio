import type { Metadata } from 'next'
import Link from "next/link"
import "./globals.css"
import { spacemono } from "./fonts"
import { Analytics } from "@/components/analytics"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: 'fvrtrp - Fevertrip portfolio and blog',
  description: "Take a look at my portfolio and blog - fevertrip, or fvrtrp in short. I post about my projects, thoughts on AI, technology, journal my ideas etc.",
  keywords: ['fevertrip', 'fvrtrp', 'fever trip', 'fevertrip blog', 'fvrtrp blog', 'fevertrip portfolio', 'fvrtrp portfolio'],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-slate-950 text-slate-50 ${spacemono.className}`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="max-w-2xl mx-auto py-10 px-4">
            <header>
              <div className="flex items-center justify-between">
                <nav className="ml-auto text-sm font-medium space-x-6 uppercase">
                  <Link href="/" className="navItem">Home</Link>
                  <Link href="/blog" className="navItem">Blog</Link>
                </nav>
              </div>
            </header>
            <main>{children}</main>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
