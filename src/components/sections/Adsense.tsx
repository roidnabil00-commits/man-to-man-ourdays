'use client'

import Image from 'next/image'

export default function Adsense() {
  return (
    <section className="relative w-full bg-[#050505] overflow-hidden" style={{ minHeight: '80vh' }}>
      {/* Background grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} 
      />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between min-h-[80vh] px-8 py-20 gap-12">
        {/* Visual Product */}
        <div className="relative w-full md:w-1/2 aspect-square max-w-[450px]">
           <div className="absolute inset-0 bg-radial-gradient from-[#b89053]/10 to-transparent rounded-full blur-3xl" />
           <Image 
             src="/images/relax.jpg" 
             alt="Ourdays Premium Candle" 
             fill 
             className="object-contain brightness-90 contrast-110"
             priority
           />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-left space-y-6">
          <p className="text-[#b89053] uppercase text-[0.6rem] tracking-[0.6em] opacity-80">
            By Ourdays.
          </p>
          <h1 className="font-serif text-white text-5xl md:text-7xl leading-tight tracking-tight">
            RECLAIM <br /> 
            <span className="text-[#b89053] italic font-light">YOUR TIME.</span>
          </h1>
          <div className="w-12 h-[1px] bg-[#b89053]/60" />
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md italic font-serif">
            "Ambil kembali kendali atas waktumu. Nyalakan untuk memicu fokus saat bekerja, atau sebagai penanda hari telah selesai."
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#arsenal" className="px-8 py-3 bg-white text-black text-[0.6rem] tracking-widest uppercase font-bold hover:bg-[#b89053] hover:text-white transition-all">
              Explore Arsenal
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}