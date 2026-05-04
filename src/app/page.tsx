import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/sections/Hero'
import Adsense from '@/components/sections/Adsense' // Import komponen baru
import Arsenal from '@/components/sections/Arsenal'
import Library from '@/components/sections/Library'
import SelfTest from '@/components/sections/SelfTest'
import Community from '@/components/sections/Community'

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <Navbar />

      {/* 1. Hero Utama dengan Background Video (Identity) */}
      <Hero />

      {/* 2. Adsense (Banner Iklan Produk - Reclaim Your Time) */}
      <Adsense />

      {/* 3. Arsenal (Katalog Produk Fisik) */}
      <Arsenal />

      {/* 4. Library (Ringkasan Buku/Value) */}
      <Library />
    </main>
  )
}