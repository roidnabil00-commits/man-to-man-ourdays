'use client'
import { motion } from 'framer-motion'
import { useReveal } from '@/lib/useReveal'

export default function Community() {
  const headerRef = useReveal()

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  })

  const values = [
    {
      num: '01',
      title: 'Integritas Aktif',
      desc: 'Bukan sekadar bicara, tapi membuktikan melalui tindakan nyata.',
    },
    {
      num: '02',
      title: 'Radical Candor',
      desc: 'Diskusi jujur dan tajam tanpa basa-basi untuk tumbuh cepat.',
    },
    {
      num: '03',
      title: '1% Setiap Hari',
      desc: 'Compound effect dari disiplin harian mengalahkan semua shortcut.',
    },
  ]

  const stats = [
    { num: '2,400+', label: 'Anggota Aktif' },
    { num: '1,800+', label: 'Pebisnis & Profesional' },
    { num: '1%', label: 'Lebih Baik Tiap Hari' },
  ]

  const whoTypes = [
    { id: '01', name: 'The Builders', desc: 'Pria yang sedang membangun bisnis atau karir.' },
    { id: '02', name: 'The Seekers', desc: 'Pria yang mencari makna lebih dalam dari eksistensi.' },
    { id: '03', name: 'The Warriors', desc: 'Pria yang sedang melatih disiplin fisik dan mental.' }
  ]

  return (
    <section id="komunitas" className="bg-[#050505] text-white overflow-hidden">
      
      {/* ── 1. HERO SECTION (RATA TENGAH & VISIBLE BG) ── */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-[6%] pt-20 pb-20 text-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="hero-video.png" 
            alt="Community Background" 
            className="w-full h-full object-cover grayscale opacity-40"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <motion.div ref={headerRef} {...fadeUp(0)} className="relative z-10 flex flex-col items-center gap-8 max-w-[900px]">
          <p className="text-[0.6rem] tracking-[0.6em] uppercase text-[#888]">03 · Komunitas</p>
          
          <h1 className="font-cormorant font-bold leading-[0.9] tracking-tighter" style={{ fontSize: 'clamp(3rem, 10vw, 7.5rem)' }}>
            JANGAN <br /> <span className="italic font-light opacity-50">TUMBUH</span> <br /> SENDIRI.
          </h1>

          <p className="font-cormorant italic text-[1.2rem] md:text-[1.5rem] text-[#aaa] leading-relaxed max-w-[700px]">
            "Lingkungan adalah arsitek tak terlihat dari perilaku kita. Di sini, kami membangun standar baru untuk pria yang menolak menjadi rata-rata."
          </p>

          <a 
            href="https://wa.me/621931656410" 
            className="bg-white text-black px-10 py-4 text-[0.6rem] font-bold tracking-[0.4em] uppercase hover:bg-neutral-200 transition-all no-underline"
          >
            Join The Fellowship →
          </a>
        </motion.div>
      </div>

      {/* ── 2. STATS BAR (PUTIH, HITAM, MOBILE = DESKTOP) ── */}
      <div className="bg-white text-black border-y-2 border-black">
        <div className="grid grid-cols-3">
          {stats.map((s, i) => (
            <div 
              key={i} 
              className="py-12 px-2 text-center border-r-2 border-black last:border-r-0 flex flex-col items-center justify-center gap-2"
            >
              <p className="font-cormorant font-bold text-[1.5rem] md:text-[2.5rem] leading-none">{s.num}</p>
              <p className="text-[0.45rem] md:text-[0.55rem] tracking-[0.2em] font-bold uppercase opacity-60 leading-tight">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 3. PRINSIP PERTUMBUHAN (MOBILE = DESKTOP) ── */}
      <div className="px-[6%] py-32 border-b-2 border-[#1a1a1a]">
        <p className="text-[0.6rem] tracking-[0.6em] uppercase text-[#666] mb-20 text-center">Prinsip Pertumbuhan</p>
        <div className="grid grid-cols-3 gap-4 md:gap-16">
          {values.map((v, i) => (
            <motion.div key={i} {...fadeUp(i * 0.2)} className="flex flex-col gap-4">
              <span className="font-cormorant italic text-[2.5rem] md:text-[4.5rem] opacity-20 leading-none">{v.num}</span>
              <h4 className="text-[0.7rem] md:text-[1.1rem] font-bold tracking-[0.1em] uppercase">{v.title}</h4>
              <p className="font-cormorant text-[#666] text-[0.8rem] md:text-[1.2rem] leading-relaxed italic">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── 4. PLATFORMS (MOBILE = DESKTOP) ── */}
      <div className="grid grid-cols-2 gap-[2px] bg-[#1a1a1a] border-b-2 border-[#1a1a1a]">
        <motion.div {...fadeUp(0)} className="bg-[#050505] p-8 md:p-24 border-r-2 border-[#1a1a1a] flex flex-col items-start gap-8">
          <div className="h-12 w-12 md:h-16 md:w-16 border border-white/20 flex items-center justify-center font-cormorant italic text-[1.2rem] md:text-[1.8rem]">WA</div>
          <h3 className="font-cormorant font-bold text-[1.4rem] md:text-[2.5rem] leading-tight">Grup Diskusi <br /> Harian.</h3>
          <p className="text-[#666] text-[0.85rem] md:text-[1.1rem] leading-relaxed hidden sm:block">Akses langsung ke diskusi harian dan networking personal.</p>
          <a href="https://wa.me/621931656410" className="text-[0.5rem] md:text-[0.65rem] tracking-[0.3em] uppercase border-b-2 border-white pb-2 hover:opacity-50 transition-all no-underline">Gabung WA →</a>
        </motion.div>

        <motion.div {...fadeUp(0.2)} className="bg-[#050505] p-8 md:p-24 flex flex-col items-start gap-8">
          <div className="h-12 w-12 md:h-16 md:w-16 border border-white/20 flex items-center justify-center font-cormorant italic text-[1.2rem] md:text-[1.8rem]">DS</div>
          <h3 className="font-cormorant font-bold text-[1.4rem] md:text-[2.5rem] leading-tight">Server Arsip <br /> Knowledge.</h3>
          <p className="text-[#666] text-[0.85rem] md:text-[1.1rem] leading-relaxed hidden sm:block">Tempat segala resource, rekaman diskusi, dan channel spesifik.</p>
          <a href="#" className="text-[0.5rem] md:text-[0.65rem] tracking-[0.3em] uppercase border-b-2 border-white pb-2 hover:opacity-50 transition-all no-underline">Masuk Discord →</a>
        </motion.div>
      </div>

      {/* ── 5. SIAPA YANG KAMI CARI (DITAMBAHKAN KEMBALI) ── */}
      <div className="grid grid-cols-2 min-h-[70vh]">
        <div className="p-8 md:p-24 flex flex-col justify-center border-r-2 border-[#1a1a1a]">
          <motion.h2 {...fadeUp(0)} className="font-cormorant font-bold text-[2rem] md:text-[4rem] leading-none mb-12">Siapa Yang <br /> Kami Cari?</motion.h2>
          <div className="flex flex-col gap-10">
            {whoTypes.map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="flex gap-6 md:gap-8">
                <span className="text-[0.6rem] md:text-[0.8rem] font-bold text-[#444]">{item.id}</span>
                <div>
                  <h5 className="text-[0.55rem] md:text-[0.7rem] tracking-[0.4em] uppercase font-bold mb-2">{item.name}</h5>
                  <p className="text-[#666] font-light text-[0.75rem] md:text-[0.95rem] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div {...fadeUp(0.3)} className="bg-[#0a0a0a] overflow-hidden grayscale relative">
           <img 
            src="https://i.pinimg.com/236x/07/20/80/072080414f058a0ea72fd866ce108b8f.jpg" 
            alt="The Seekers" 
            className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-[3s]"
          />
        </motion.div>
      </div>

    </section>
  )
}