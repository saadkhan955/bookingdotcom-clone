import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'



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
        <Header />
        {children}
      </body>
    </html>
  )
}
