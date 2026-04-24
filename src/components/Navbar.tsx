'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] px-[6%] py-[22px] flex items-center justify-between transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(5,5,5,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '2px solid #2e2e2e' : '2px solid transparent',
      }}
    >
      {/* Logo */}
      <a href="#" className="font-cormorant text-[1.1rem] font-normal tracking-[0.2em] text-[var(--text)] no-underline">
        MAN TO MAN
        <span className="italic opacity-50 text-[0.75rem] tracking-[0.15em] ml-[6px]">by Ourdays</span>
      </a>

      {/* Desktop nav */}
      <ul className="hidden md:flex gap-9 list-none">
        {['Library', 'Self Test', 'Komunitas'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-[0.6rem] tracking-[0.35em] uppercase text-[var(--text-mid)] no-underline hover:text-[var(--text)] transition-colors duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#komunitas"
        className="hidden md:inline-block text-[0.58rem] tracking-[0.3em] uppercase text-[var(--bg)] bg-[var(--text)] px-5 py-[9px] no-underline hover:bg-white transition-all duration-300"
      >
        Gabung
      </a>

      {/* Hamburger */}
      <button
        className="flex md:hidden flex-col gap-[5px] cursor-pointer bg-none border-none p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span className="hamburger-line" style={{ transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : '' }} />
        <span className="hamburger-line" style={{ opacity: menuOpen ? 0 : 1 }} />
        <span className="hamburger-line" style={{ transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : '' }} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 border-t-2 border-b-2 py-6 px-[6%] flex flex-col gap-4"
          style={{ background: 'rgba(5,5,5,0.98)', borderColor: '#2e2e2e' }}
        >
          {['Library', 'Self Test', 'Komunitas'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-[0.6rem] tracking-[0.35em] uppercase text-[var(--text-mid)] no-underline hover:text-[var(--text)]"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#komunitas"
            className="text-[0.58rem] tracking-[0.3em] uppercase text-[var(--bg)] bg-[var(--text)] px-5 py-[9px] no-underline w-fit mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Gabung
          </a>
        </div>
      )}
    </nav>
  )
}
