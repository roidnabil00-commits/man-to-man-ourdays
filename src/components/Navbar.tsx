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

  // Catalog ditambahkan di urutan pertama menuju #arsenal
  const navItems = [
    { name: 'Catalog', path: '/#arsenal' },
    { name: 'Library', path: '/#library' },
    { name: 'Self Test', path: '/self-test' },
    { name: 'Komunitas', path: '/komunitas' }
  ]

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
      <a href="/" className="font-cormorant text-[1.1rem] font-normal tracking-[0.2em] text-[var(--text)] no-underline">
        MAN TO MAN
        <span className="italic opacity-50 text-[0.75rem] tracking-[0.15em] ml-[6px]">by Ourdays</span>
      </a>

      {/* Desktop nav */}
      <ul className="hidden md:flex gap-9 list-none">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.path}
              className="text-[0.6rem] tracking-[0.35em] uppercase text-[var(--text-mid)] no-underline hover:text-[var(--text)] transition-colors duration-300"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="/komunitas"
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
        <div className="w-6 h-[1.5px] bg-white transition-all duration-300" style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : '' }} />
        <div className="w-6 h-[1.5px] bg-white transition-all duration-300" style={{ opacity: menuOpen ? 0 : 1 }} />
        <div className="w-6 h-[1.5px] bg-white transition-all duration-300" style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : '' }} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 border-t-2 border-b-2 py-8 px-[6%] flex flex-col gap-5"
          style={{ background: 'rgba(5,5,5,0.98)', borderColor: '#2e2e2e' }}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="text-[0.65rem] tracking-[0.35em] uppercase text-[var(--text-mid)] no-underline hover:text-[var(--text)]"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="/komunitas"
            className="text-[0.6rem] tracking-[0.3em] uppercase text-[var(--bg)] bg-[var(--text)] px-6 py-3 no-underline w-fit mt-3 font-bold"
            onClick={() => setMenuOpen(false)}
          >
            Gabung Komunitas
          </a>
        </div>
      )}
    </nav>
  )
}