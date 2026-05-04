'use client'

import { useState } from 'react'
import OrderForm from './OrderForm'
import Image from 'next/image'

const coffeeProducts = [
  {
    id: 'soft-americano',
    name: 'SOFT AMERICANO',
    subtitle: '100% Biji Kopi Robusta',
    badge: '10 sachet',
    quote: '"You can\'t buy happiness but you can buy coffee and that\'s pretty close."',
    price: 'Rp35.000',
    priceValue: 35000, // Tambahkan nilai angka untuk perhitungan
    img: '/images/kopi1.jpg',
  },
  {
    id: 'strong-americano',
    name: 'STRONG AMERICANO',
    subtitle: '100% Biji Kopi Robusta',
    badge: '10 sachet',
    quote: '"Pria sejati menikmati pahitnya proses demi manisnya kesuksesan"',
    price: 'Rp35.000',
    priceValue: 35000, // Tambahkan nilai angka untuk perhitungan
    img: '/images/kopi2.jpg',
  },
]

const variants = [
  { id: 'grind', name: 'GRIND', scent: 'Black Coffee', origin: 'Dark Roast', desc: 'Aroma kopi yang mengingatkan bahwa hari ini adalah milikmu.', benefit: 'Produktivitas · Morning Ritual', img: '/images/grind.jpg', priceValue: 75000 },
  { id: 'locked-in', name: 'LOCKED IN', scent: 'Peppermint', origin: 'Fresh & Sharp', desc: 'Ketika pikiran harus jernih. Segar. Tajam. Fokus maksimal.', benefit: 'Fokus · Deep Work', img: '/images/locked-in.jpg', priceValue: 75000 },
  { id: 'after-hours', name: 'AFTER HOURS', scent: 'Lavender', origin: 'Calm & Deep', desc: 'Untuk malam setelah semua perjuangan diberikan. Tenang.', benefit: 'Anti-Anxiety · Wind Down', img: '/images/after-hours.jpg', priceValue: 75000 },
  { id: 'golden-hour', name: 'GOLDEN HOUR', scent: 'Bergamot', origin: 'Citrus · Warm', desc: 'Momen transisi milikmu sepenuhnya. Sore yang sempurna.', benefit: 'Mood Boost · Energi', img: '/images/golden-hour.jpg', priceValue: 75000 },
  { id: 'neat', name: 'NEAT', scent: 'Whiskey', origin: 'Prestige', desc: 'Hangat, lepas kendali, dan gairah di balik rileksnya malam.', benefit: 'Prestige · Night Ritual', img: '/images/neat.jpg', priceValue: 75000 },
]

export default function Arsenal() {
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null)

  // Gabungkan semua produk agar activeVariant bisa mengambil datanya secara lengkap
  const allProducts = [
    ...coffeeProducts.map(c => ({ id: c.id, name: c.name, priceValue: c.priceValue })),
    ...variants.map(v => ({ id: v.id, name: v.name, priceValue: v.priceValue })),
  ]

  const activeVariant = allProducts.find(v => v.id === selectedVariant)

  return (
    <section id="arsenal" className="w-full py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <p className="text-[#b89053] text-[0.6rem] tracking-[0.5em] uppercase">FOR YOUR PRODUCTIVITY</p>
          <h2 className="font-serif text-4xl text-white tracking-widest uppercase">CATALOG</h2>
          <div className="w-10 h-[0.5px] bg-[#b89053]/40 mx-auto" />
        </div>

        {/* Coffee Products — Featured Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {coffeeProducts.map((c) => (
            <div
              key={c.id}
              className="group border border-[#b89053]/30 bg-[#0a0a0a]/70 hover:border-[#b89053]/70 transition-all duration-500 flex flex-col sm:flex-row gap-0 sm:gap-5 sm:p-5"
            >
              <div className="relative w-full sm:w-36 sm:shrink-0 aspect-video sm:aspect-square overflow-hidden bg-[#0d0d0d] border-b sm:border-b-0 sm:border border-[#1a1a1a]">
                <Image src={c.img} alt={c.name} fill className="object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" />
              </div>

              <div className="flex flex-col justify-between flex-1 p-4 sm:py-1 sm:px-0">
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-serif text-white text-lg tracking-widest uppercase">{c.name}</h3>
                    <span className="text-[#b89053] text-[0.55rem] uppercase tracking-widest opacity-70 border border-[#b89053]/30 px-2 py-0.5 shrink-0 ml-2">
                      {c.badge}
                    </span>
                  </div>
                  <p className="text-[#b89053]/60 text-[0.55rem] tracking-widest uppercase">{c.subtitle}</p>
                  <p className="text-gray-300 text-[0.7rem] leading-relaxed italic">{c.quote}</p>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-[#1a1a1a] mt-3">
                  <span className="text-white text-base font-serif">{c.price}</span>
                  <button
                    onClick={() => setSelectedVariant(c.id)}
                    className="text-[0.55rem] tracking-widest uppercase px-5 py-2 border border-[#b89053]/30 text-[#b89053] hover:bg-[#b89053] hover:text-black transition-all"
                  >
                    ORDER
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Candle Variants — 5 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {variants.map((v) => (
            <div key={v.id} className="group border border-[#1a1a1a] bg-[#0a0a0a]/50 hover:border-[#b89053]/40 transition-all duration-500 flex flex-col p-4">
              <div className="relative aspect-square overflow-hidden mb-6 bg-[#0d0d0d]">
                <Image src={v.img} alt={v.name} fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              </div>
              <div className="flex-1 space-y-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-serif text-white text-xs tracking-widest uppercase">{v.name}</h3>
                  <span className="text-[#b89053] text-[0.5rem] uppercase opacity-60">{v.origin}</span>
                </div>
                <p className="text-[#b89053] text-[0.55rem] tracking-widest uppercase font-bold">{v.scent}</p>
                <p className="text-gray-500 text-[0.65rem] leading-relaxed line-clamp-3 font-light">{v.desc}</p>
                <div className="text-[0.5rem] tracking-tighter text-gray-600 uppercase border-t border-[#1a1a1a] pt-3">{v.benefit}</div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-white text-xs font-serif">Rp75.000</span>
                  <button
                    onClick={() => setSelectedVariant(v.id)}
                    className="text-[0.55rem] tracking-widest uppercase px-4 py-2 border border-[#b89053]/30 text-[#b89053] hover:bg-[#b89053] hover:text-black transition-all"
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Kirim priceValue ke OrderForm */}
      {selectedVariant && activeVariant && (
        <OrderForm 
          variantName={activeVariant.name} 
          unitPrice={activeVariant.priceValue} 
          onClose={() => setSelectedVariant(null)} 
        />
      )}
    </section>
  )
}