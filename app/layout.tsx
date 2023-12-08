import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import { SpeedInsights } from "@vercel/speed-insights/next"


export const metadata: Metadata = {
  title: 'Booking.com Clone',
  description: 'This is a Booking.com clone just for learning purpose.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SpeedInsights />
        <Header />
        {children}
      </body>
    </html>
  )
}
