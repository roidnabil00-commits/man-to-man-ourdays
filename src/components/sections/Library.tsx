'use client'
import { useState } from 'react'
import { useReveal, useBookReveal } from '@/lib/useReveal'
import { books } from '@/lib/data'
import BookModal from '@/components/BookModal'

export default function Library() {
  const headerRef = useReveal()
  const gridRef = useBookReveal()
  
  // State untuk menyimpan data buku yang diklik
  const [selectedBook, setSelectedBook] = useState<typeof books[0] | null>(null)

  return (
    <>
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
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: '2px',
            background: '#2e2e2e',
            border: '2px solid #2e2e2e',
          }}
        >
          {books.map((book, i) => (
            <div
              key={book.id}
              className="book-card"
              onClick={() => setSelectedBook(book)} // Memicu modal terbuka
              style={{ transitionDelay: `${(i % 10) * 40}ms`, cursor: 'pointer' }}
            >
              {/* Book Cover */}
<div
  className="w-full relative group"
  style={{
    aspectRatio: '2/3',
    background: '#111',
    border: '2px solid #2e2e2e',
    marginBottom: '4px',
    overflow: 'hidden',
  }}
>
  {/* Free badge */}
  <span
    className="absolute top-2 right-2 text-[0.45rem] tracking-[0.2em] uppercase z-10"
    style={{ background: 'var(--white)', color: 'var(--bg)', padding: '2px 6px' }}
  >
    Free
  </span>

  {/* Image Render */}
  {/* Menggunakan tag img standar. Pastikan data 'book.cover' sudah Anda tambahkan di data.ts */}
  <img 
    src={book.cover || ''} 
    alt={`Sampul buku ${book.title}`}
    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    onError={(e) => {
      // Fallback jika gambar belum ada atau link rusak, akan menampilkan warna gelap
      e.currentTarget.style.display = 'none';
    }}
  />

  {/* Fallback UI (Akan terlihat jika gambar gagal dimuat/belum ada gambar) */}
  <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center text-center p-3 bg-[#0d0d0d] border-[2px] border-[#1a1a1a] m-[7.5%] w-[85%] h-[85%]">
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

      {/* Render Modal di luar section agar tidak terkena efek layout/grid */}
      <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
    </>
  )
}