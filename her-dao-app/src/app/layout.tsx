import type { Metadata } from 'next'
import { Inter_Tight } from 'next/font/google'
import './globals.css'

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'H.E.R. DAO - Building the Future of Web3',
  description: 'Empowering women in blockchain through infrastructure, education, and ecosystems for the next generation.',
  icons: {
    icon: 'https://res.cloudinary.com/dsoojlgg1/image/upload/v1769332904/logo_black_light-mode_zzw5oi.png',
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
