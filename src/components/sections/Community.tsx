'use client'
import { useReveal } from '@/lib/useReveal'

export default function Community() {
  const headerRef = useReveal()

  return (
    <section
      id="komunitas"
      className="px-[6%] py-24"
      style={{ background: 'var(--bg)', borderTop: '2px solid #2e2e2e' }}
    >
      {/* Header */}
      <div ref={headerRef} className="reveal mb-16">
        <p className="text-[0.58rem] tracking-[0.55em] uppercase text-[var(--text-dim)] mb-3">
          03 · Komunitas
        </p>
        <div className="w-8 h-px bg-[#2e2e2e] mb-5" />
        <h2
          className="font-cormorant font-bold text-white leading-[1.05] mb-3"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          Jangan Tumbuh Sendiri.
        </h2>
        <p
          className="font-cormorant italic font-light text-[var(--text-mid)] max-w-[560px] leading-[1.75]"
          style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)' }}
        >
          Lingkungan menentukan segalanya. Gabung bersama ribuan pria yang serius dalam perjalanan pertumbuhan mereka — saling mendorong, berbagi insight, dan berkembang bersama.
        </p>
      </div>

      {/* Community cards */}
      <div
        className="grid md:grid-cols-2 mb-16"
        style={{ gap: '2px', background: '#2e2e2e', border: '2px solid #2e2e2e' }}
      >
        {/* WhatsApp */}
        <div className="flex flex-col gap-6 p-12" style={{ background: 'var(--bg)' }}>
          <div>
            <p className="text-[0.5rem] tracking-[0.4em] uppercase text-[var(--text-dim)] mb-2">Platform 01</p>
            <h3 className="font-cormorant font-bold text-white text-[1.8rem] mb-3">WhatsApp</h3>
            <p className="font-cormorant italic text-[var(--text-mid)] text-[1rem] leading-[1.7]">
              Group eksklusif untuk diskusi harian, share progress, dan saling support. Langsung, personal, dan high-quality interactions.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {['Daily motivation & insights', 'Book discussion threads', 'Progress sharing', 'Direct access ke founder'].map((perk) => (
              <div key={perk} className="flex items-center gap-3 text-[0.7rem] tracking-[0.05em] text-[var(--text-mid)]">
                <span className="w-4 h-px bg-white/20 shrink-0" />
                {perk}
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/yourlink"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 text-[var(--bg)] text-[0.6rem] tracking-[0.3em] uppercase font-medium no-underline hover:bg-[#e0e0e0] transition-all duration-300 w-fit"
            style={{ background: 'var(--white)' }}
          >
            Gabung WhatsApp
            <span className="w-4 h-px bg-current" />
          </a>
        </div>

        {/* Discord */}
        <div className="flex flex-col gap-6 p-12" style={{ background: 'var(--bg)' }}>
          <div>
            <p className="text-[0.5rem] tracking-[0.4em] uppercase text-[var(--text-dim)] mb-2">Platform 02</p>
            <h3 className="font-cormorant font-bold text-white text-[1.8rem] mb-3">Discord</h3>
            <p className="font-cormorant italic text-[var(--text-mid)] text-[1rem] leading-[1.7]">
              Server dengan berbagai channel berdasarkan topik. Deep-dive discussions, resources library, dan networking yang lebih terstruktur.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {['Topik-based channels', 'Resource library', 'Weekly challenges', 'Networking & kolaborasi'].map((perk) => (
              <div key={perk} className="flex items-center gap-3 text-[0.7rem] tracking-[0.05em] text-[var(--text-mid)]">
                <span className="w-4 h-px bg-white/20 shrink-0" />
                {perk}
              </div>
            ))}
          </div>

          <a
            href="https://discord.gg/yourlink"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 text-[var(--text-mid)] text-[0.6rem] tracking-[0.3em] uppercase no-underline hover:text-[var(--text)] transition-all duration-300 w-fit"
            style={{ border: '2px solid #2e2e2e' }}
          >
            Gabung Discord
            <span className="w-4 h-px bg-current" />
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="grid grid-cols-3"
        style={{ border: '2px solid #2e2e2e' }}
      >
        {[
          { num: '2,400+', label: 'Anggota Aktif' },
          { num: '30+', label: 'Buku Dikurasi' },
          { num: '1%', label: 'Lebih Baik Tiap Hari' },
        ].map((stat, i) => (
          <div
            key={i}
            className="py-8 px-6 text-center"
            style={{ borderRight: i < 2 ? '2px solid #2e2e2e' : 'none' }}
          >
            <p className="font-cormorant font-bold text-white mb-1" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              {stat.num}
            </p>
            <p className="text-[0.55rem] tracking-[0.35em] uppercase text-[var(--text-dim)]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
