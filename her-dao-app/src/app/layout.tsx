import type { Metadata } from 'next'
import { Inter_Tight } from 'next/font/google'
import './globals.css'

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'H.E.R. DAO - Building the Future of Web3',
  description: 'Empowering diverse builders in blockchain through infrastructure, education, and ecosystems for the next generation.',
  icons: {
    icon: 'https://res.cloudinary.com/dsoojlgg1/image/upload/v1769525933/her_dao-logo_-_black_-_light_mode_-_circle_c1rx6x.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={interTight.className}>{children}</body>
    </html>
  )
}
