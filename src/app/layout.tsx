import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer' // 1. Import Footer di sini

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer /> {/* 2. Panggil Footer di sini (setelah children) */}
      </body>
    </html>
  )
}