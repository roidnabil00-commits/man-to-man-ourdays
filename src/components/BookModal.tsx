'use client'
import { useState, useEffect } from 'react'

type Book = {
  id: number
  title: string
  author: string
  category: string
}

type BookModalProps = {
  book: Book | null
  onClose: () => void
}

export default function BookModal({ book, onClose }: BookModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    job: ''
  })

  // Mencegah scroll pada background saat modal terbuka
  useEffect(() => {
    if (book) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [book])

  if (!book) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const waNumber = '621931656410'
    
    // Format pesan WhatsApp
    const message = `Halo kak, saya mau akses buku *${book.title}*.\n\nBerikut data diri saya:\n- Nama: ${formData.name}\n- No. WA: ${formData.phone}\n- Email: ${formData.email}\n- Umur: ${formData.age || '-'}\n- Pekerjaan: ${formData.job || '-'}\n\nMohon info selanjutnya ya kak!`
    
    const encodedMessage = encodeURIComponent(message)
    const waUrl = `https://wa.me/${waNumber}?text=${encodedMessage}`

    // Buka WhatsApp di tab baru dan tutup modal
    window.open(waUrl, '_blank')
    setFormData({ name: '', phone: '', email: '', age: '', job: '' })
    onClose()
  }

  const inputClass = "w-full bg-[#111] border-2 border-[#2e2e2e] p-3 text-[var(--text)] text-[0.8rem] focus:border-white focus:outline-none transition-colors duration-300 font-cormorant"

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Overlay Background */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-[var(--bg)] border-2 border-[#2e2e2e] p-8 shadow-2xl z-10">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--text-dim)] hover:text-white transition-colors"
        >
          <span className="text-xl leading-none">&times;</span>
        </button>

        {/* Header Modal */}
        <div className="mb-6 border-b-2 border-[#2e2e2e] pb-4">
          <p className="text-[0.55rem] tracking-[0.3em] uppercase text-[var(--text-dim)] mb-2">Request Akses</p>
          <h3 className="font-cormorant font-bold text-white text-[1.4rem] leading-tight mb-1">
            {book.title}
          </h3>
          <p className="text-[0.65rem] tracking-[0.1em] text-[var(--text-mid)] uppercase">
            Oleh {book.author}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <input 
              type="text" 
              required 
              placeholder="Nama Lengkap *" 
              className={inputClass}
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <input 
              type="tel" 
              required 
              placeholder="Nomor WhatsApp *" 
              className={inputClass}
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          <div>
            <input 
              type="email" 
              required 
              placeholder="Alamat Email *" 
              className={inputClass}
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input 
              type="number" 
              placeholder="Umur" 
              className={inputClass}
              value={formData.age}
              onChange={(e) => setFormData({...formData, age: e.target.value})}
            />
            <input 
              type="text" 
              placeholder="Pekerjaan" 
              className={inputClass}
              value={formData.job}
              onChange={(e) => setFormData({...formData, job: e.target.value})}
            />
          </div>

          <button 
            type="submit"
            className="mt-4 w-full bg-white text-[var(--bg)] font-medium uppercase text-[0.65rem] tracking-[0.2em] py-4 hover:bg-[#e0e0e0] transition-colors"
          >
            Kirim Request & Hubungi WA
          </button>
        </form>

      </div>
    </div>
  )
}