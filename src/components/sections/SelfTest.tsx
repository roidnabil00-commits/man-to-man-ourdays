'use client'
import { useState } from 'react'
import { useReveal } from '@/lib/useReveal'
import TestModal from '@/components/TestModal'

type TestType = 'passion' | 'skill'

export default function SelfTest() {
  const headerRef = useReveal()
  const [activeTest, setActiveTest] = useState<TestType | null>(null)

  return (
    <>
      <section
        id="self-test"
        className="px-[6%] py-24"
        style={{ background: 'var(--surface)', borderTop: '2px solid #2e2e2e', borderBottom: '2px solid #2e2e2e' }}
      >
        {/* Header */}
        <div ref={headerRef} className="reveal mb-16">
          <p className="text-[0.58rem] tracking-[0.55em] uppercase text-[var(--text-dim)] mb-3">
            02 · Self Test
          </p>
          <div className="w-8 h-px bg-[#2e2e2e] mb-5" />
          <h2
            className="font-cormorant font-bold text-white leading-[1.05] mb-3"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Kenali Dirimu.
          </h2>
          <p
            className="font-cormorant italic font-light text-[var(--text-mid)]"
            style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)' }}
          >
            Dua tes yang dirancang untuk membantu lo memahami diri sendiri lebih dalam.
          </p>
        </div>

        {/* Test cards grid */}
        <div
          className="grid md:grid-cols-2"
          style={{ gap: '2px', background: '#2e2e2e', border: '2px solid #2e2e2e' }}
        >
          {/* Passion Test */}
          <div
  className="flex flex-col gap-5 p-6 md:p-12"
  style={{ background: 'var(--surface)' }}
>
            <p
              className="font-cormorant font-bold text-[var(--text-dim)] leading-none"
              style={{ fontSize: '4rem', marginBottom: '-16px' }}
            >
              01
            </p>
            <h3 className="font-cormorant font-bold text-white text-[1.6rem]">
              Passion Test
            </h3>
            <p className="font-cormorant italic text-[var(--text-mid)] text-[1rem] leading-[1.7]">
              Temukan apa yang benar-benar menggerakkan lo dari dalam. Bukan sekadar hobi, tapi arah hidup yang sesuai dengan siapa lo sebenarnya.
            </p>

            <div className="flex flex-col gap-[10px] my-2">
              {['10 pertanyaan mendalam', 'Hasil: 4 tipe passion', 'Rekomendasi buku personal', 'Download hasil as PDF'].map((f) => (
                <div key={f} className="flex items-center gap-3 text-[0.72rem] tracking-[0.05em] text-[var(--text-mid)]">
                  <span className="w-4 h-px bg-white/20 shrink-0" />
                  {f}
                </div>
              ))}
            </div>

            <button
              onClick={() => setActiveTest('passion')}
              className="flex items-center gap-[10px] px-6 py-3 text-[0.58rem] tracking-[0.3em] uppercase text-[var(--text-mid)] hover:text-[var(--text)] transition-all duration-300 w-fit mt-2 cursor-pointer bg-transparent"
              style={{ border: '2px solid #2e2e2e' }}
            >
              Mulai Passion Test
              <span className="w-4 h-px bg-current transition-[width] duration-300 group-hover:w-6" />
            </button>
          </div>

          {/* Skill Test */}
          <div
  className="flex flex-col gap-5 p-6 md:p-12"
  style={{ background: 'var(--surface)' }}
>
            <p
              className="font-cormorant font-bold text-[var(--text-dim)] leading-none"
              style={{ fontSize: '4rem', marginBottom: '-16px' }}
            >
              02
            </p>
            <h3 className="font-cormorant font-bold text-white text-[1.6rem]">
              Skill Test
            </h3>
            <p className="font-cormorant italic text-[var(--text-mid)] text-[1rem] leading-[1.7]">
              Identifikasi kekuatan unik lo yang sering diabaikan. Skill lo adalah aset paling berharga — saatnya lo tahu persis di mana lo paling kuat.
            </p>

            <div className="flex flex-col gap-[10px] my-2">
              {['10 pertanyaan behavioral', 'Hasil: 4 skill profile', 'Roadmap pengembangan diri', 'Download hasil as PDF'].map((f) => (
                <div key={f} className="flex items-center gap-3 text-[0.72rem] tracking-[0.05em] text-[var(--text-mid)]">
                  <span className="w-4 h-px bg-white/20 shrink-0" />
                  {f}
                </div>
              ))}
            </div>

            <button
              onClick={() => setActiveTest('skill')}
              className="flex items-center gap-[10px] px-6 py-3 text-[0.58rem] tracking-[0.3em] uppercase text-[var(--text-mid)] hover:text-[var(--text)] transition-all duration-300 w-fit mt-2 cursor-pointer bg-transparent"
              style={{ border: '2px solid #2e2e2e' }}
            >
              Mulai Skill Test
              <span className="w-4 h-px bg-current transition-[width] duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      <TestModal testType={activeTest} onClose={() => setActiveTest(null)} />
    </>
  )
}
