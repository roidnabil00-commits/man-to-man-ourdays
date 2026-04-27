'use client'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#050505] text-white px-[6%] pt-24 pb-12 border-t-2 border-[#1a1a1a]">
      <div className="grid md:grid-cols-2 gap-16 mb-24">
        
        {/* Kolom Kiri: Brand Manifesto */}
        <div className="flex flex-col gap-8">
          <h2 className="font-cormorant font-bold text-[2.5rem] leading-none tracking-tight">
            MAN TO MAN <br /> 
            <span className="italic opacity-50 font-light">by Ourdays</span>
          </h2>
          <p className="text-[#666] max-w-[400px] leading-relaxed font-light">
            Platform pertumbuhan untuk pria yang serius. Kami mengkurasi literatur, 
            membangun alat refleksi diri, dan menyediakan ekosistem untuk pria yang berani tumbuh.
          </p>
        </div>

        {/* Kolom Kanan: Navigasi & Socials */}
        <div className="grid grid-cols-2 gap-8">
          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <p className="text-[0.55rem] tracking-[0.4em] uppercase text-[#444] mb-2 font-bold">Navigasi</p>
            <ul className="flex flex-col gap-3 list-none p-0">
              {['Library', 'Self Test', 'Komunitas'].map((item) => (
                <li key={item}>
                  <a 
                    href={item === 'Library' ? '/#library' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-[0.8rem] text-[#888] hover:text-white transition-colors no-underline uppercase tracking-widest"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-4">
            <p className="text-[0.55rem] tracking-[0.4em] uppercase text-[#444] mb-2 font-bold">Hubungi Kami</p>
            <ul className="flex flex-col gap-3 list-none p-0">
              <li>
                <a href="https://wa.me/621931656410" className="text-[0.8rem] text-[#888] hover:text-white transition-colors no-underline">WhatsApp</a>
              </li>
              <li>
                <a href="#" className="text-[0.8rem] text-[#888] hover:text-white transition-colors no-underline">Instagram</a>
              </li>
              <li>
                <a href="mailto:hello@ourdays.com" className="text-[0.8rem] text-[#888] hover:text-white transition-colors no-underline">Email</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Credits */}
      <div className="pt-12 border-t border-[#1a1a1a] flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[0.55rem] tracking-[0.3em] uppercase text-[#444]">
          © {currentYear} MAN TO MAN BY OURDAYS. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-[0.55rem] tracking-[0.3em] uppercase text-[#444] no-underline hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-[0.55rem] tracking-[0.3em] uppercase text-[#444] no-underline hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}