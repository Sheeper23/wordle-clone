import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wordle',
  description: 'A clone of Wordle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col m-0 h-[100dvh] overflow-x-hidden bg-backfill`}>
        {children}
      </body>
    </html>
  )
}
