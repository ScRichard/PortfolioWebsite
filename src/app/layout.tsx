import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Richard Schmidt | Software Engineer & CS Student',
  description:
    'Portfolio of Richard Schmidt - Computer Science student at University of Žilina, focused on building scalable and high-performance software.',
  keywords: [
    'Richard Schmidt',
    'Software Engineer',
    'Computer Science',
    'Portfolio',
    'Java',
    'C++',
    'React',
    'Next.js',
  ],
  authors: [{ name: 'Richard Schmidt' }],
  openGraph: {
    title: 'Richard Schmidt | Software Engineer & CS Student',
    description:
      'Portfolio of Richard Schmidt - Computer Science student at University of Žilina, focused on building scalable and high-performance software.',
    url: 'https://richardschmidt.dev',
    siteName: 'Richard Schmidt Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Richard Schmidt | Software Engineer & CS Student',
    description: 'Computer Science student building scalable software solutions.',
  },
  robots: 'index, follow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0F172A" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-dark-bg">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
