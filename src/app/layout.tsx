import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Konfigurasi Metadata untuk SEO dan Social Media Sharing
export const metadata: Metadata = {
  title: 'Man to Man by Ourdays | Platform Pertumbuhan Pria',
  description: 'Kurasasi literatur terbaik, tes potensi diri, dan komunitas eksklusif untuk pria yang berani tumbuh 1% setiap hari.',
  keywords: ['pertumbuhan pria', 'komunitas pria', 'self-improvement', 'buku pengembangan diri'],
  authors: [{ name: 'Ourdays' }],
  openGraph: {
    title: 'Man to Man by Ourdays',
    description: 'Platform pertumbuhan untuk pria yang serius. Join the 1% fellowship.',
    url: 'https://mantoman.id', // Sesuaikan dengan domain Anda nanti
    siteName: 'Man to Man',
    images: [
      {
        url: '/og-image.jpg', // Pastikan file ini ada di folder public
        width: 1200,
        height: 630,
        alt: 'Man to Man by Ourdays Preview',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Man to Man by Ourdays',
    description: 'Platform pertumbuhan untuk pria yang serius.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className="antialiased overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}