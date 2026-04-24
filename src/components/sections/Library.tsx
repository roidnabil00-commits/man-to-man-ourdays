'use client'
import { useReveal, useBookReveal } from '@/lib/useReveal'
import { books } from '@/lib/data'

export default function Library() {
  const headerRef = useReveal()
  const gridRef = useBookReveal()

  return (
    <section
      id="library"
      className="px-[6%] py-24"
      style={{ background: 'var(--bg)', borderTop: '2px solid #2e2e2e' }}
    >
      {/* Header */}
      <div ref={headerRef} className="reveal mb-16">
        <p className="text-[0.58rem] tracking-[0.55em] uppercase text-[var(--text-dim)] mb-3">
          01 · Library
        </p>
        <div className="w-8 h-px bg-[#2e2e2e] mb-5" />
        <h2
          className="font-cormorant font-bold text-white leading-[1.05] mb-3"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          Katalog Buku
        </h2>
        <p
          className="font-cormorant italic font-light text-[var(--text-mid)] tracking-[0.05em]"
          style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}
        >
          &ldquo;Jadilah 1% lebih baik setiap hari.&rdquo;
        </p>
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        className="grid"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gap: '2px',
          background: '#2e2e2e',
          border: '2px solid #2e2e2e',
        }}
      >
        {books.map((book, i) => (
          <div
            key={book.id}
            className="book-card"
            style={{ transitionDelay: `${(i % 10) * 40}ms`, cursor: 'pointer' }}
          >
            {/* Book Cover */}
            <div
              className="w-full relative"
              style={{
                aspectRatio: '2/3',
                background: '#111',
                border: '2px solid #2e2e2e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '4px',
                overflow: 'hidden',
              }}
            >
              {/* Free badge */}
              <span
                className="absolute top-2 right-2 text-[0.45rem] tracking-[0.2em] uppercase"
                style={{ background: 'var(--white)', color: 'var(--bg)', padding: '2px 6px' }}
              >
                Free
              </span>

              <div
                className="flex flex-col items-center justify-center text-center p-3"
                style={{
                  width: '85%',
                  height: '85%',
                  background: '#0d0d0d',
                  border: '2px solid #1a1a1a',
                }}
              >
                <p
                  className="font-cormorant font-bold leading-[1.3] mb-[6px]"
                  style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.05em' }}
                >
                  {book.title}
                </p>
                <p
                  className="uppercase"
                  style={{ fontSize: '0.48rem', letterSpacing: '0.2em', color: 'var(--text-dim)' }}
                >
                  {book.author}
                </p>
              </div>
            </div>

            {/* Number */}
            <p style={{ fontSize: '0.5rem', letterSpacing: '0.3em', color: 'var(--text-dim)' }}>
              {String(book.id).padStart(2, '0')}
            </p>

            {/* Title */}
            <p
              className="font-cormorant font-semibold leading-[1.3] text-[var(--text)]"
              style={{ fontSize: '0.85rem' }}
            >
              {book.title}
            </p>

            {/* Author */}
            <p
              className="uppercase text-[var(--text-dim)]"
              style={{ fontSize: '0.58rem', letterSpacing: '0.15em' }}
            >
              {book.author}
            </p>

            {/* Category */}
            <span
              className="text-[var(--text-dim)] inline-block w-fit"
              style={{
                fontSize: '0.5rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                border: '2px solid #2e2e2e',
                padding: '3px 8px',
              }}
            >
              {book.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
