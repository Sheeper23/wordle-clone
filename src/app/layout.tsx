import './globals.css'
import type { Metadata } from 'next'
import { Roboto, Maiden_Orange } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: [
    "100", "300", "400", "500", "700", "900"
  ]
})
const maidenOrange = Maiden_Orange({subsets: ['latin'], weight: "400", variable: "--title-font"})

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
      <body className={`${roboto.className} ${maidenOrange.variable} flex flex-col m-0 h-[100dvh] overflow-x-hidden bg-backfill`}>
        {children}
      </body>
    </html>
  )
}
