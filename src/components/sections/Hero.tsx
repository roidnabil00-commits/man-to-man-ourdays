'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-[6%] pt-[120px] pb-[80px] relative overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        {/* Pastikan Anda meletakkan file video (misal: hero-video.mp4) di dalam folder 'public' Next.js Anda */}
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay - Sangat krusial agar teks tetap terbaca */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      {/* Noise overlay ringan untuk tekstur sinematik */}
      <div 
        className="absolute inset-0 z-[2] pointer-events-none opacity-[0.05]" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />

      {/* Konten Utama - Menggunakan z-10 agar berada di atas video dan overlay */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0 }}
          className="text-[0.6rem] tracking-[0.55em] uppercase text-[var(--text-dim)] mb-7 font-medium"
        >
          by Ourdays · Est. 2024
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-cormorant font-bold text-white leading-[0.95] tracking-[-0.01em] mb-2"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 7rem)' }}
        >
          GROW
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-cormorant font-bold text-white leading-[0.95] tracking-[-0.01em] mb-3"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 7rem)' }}
        >
          TOGETHER
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-cormorant font-medium italic text-[var(--text-mid)] tracking-[0.1em] mb-9"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.8rem)' }}
        >
          Man to Man — by Ourdays
        </motion.p>

        {/* Divider line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-px h-10 mx-auto mb-9"
          style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)' }}
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-cormorant italic font-medium text-[var(--text-mid)] leading-[1.85] max-w-[580px] mb-12"
          style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}
        >
          Platform pertumbuhan untuk pria yang serius. Buku terbaik, tes potensi diri,
          dan komunitas yang dorongkamu jadi 1% lebih baik setiap harinya.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex gap-3 flex-wrap justify-center"
        >
          <a
            href="#library"
            className="px-8 py-3 bg-white text-[var(--bg)] text-[0.6rem] tracking-[0.3em] uppercase font-medium no-underline hover:bg-[#e0e0e0] transition-all duration-300"
          >
            Jelajahi Library
          </a>
          <a
            href="/self-test"
            className="px-8 py-3 text-white text-[0.6rem] tracking-[0.3em] uppercase no-underline hover:bg-white/10 transition-all duration-300"
            style={{ border: '2px solid white' }}
          >
            Mulai Tes
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[0.48rem] tracking-[0.45em] uppercase text-[var(--text-dim)]">Scroll</span>
        <div
          className="w-px h-10 animate-scroll-pulse"
          style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)' }}
        />
      </motion.div>
    </section>
  )
}