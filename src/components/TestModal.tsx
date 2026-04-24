'use client'
import { useState, useEffect } from 'react'
import { passionQuestions, skillQuestions, resultMap } from '@/lib/data'

type TestType = 'passion' | 'skill'
type AnswerLetter = 'A' | 'B' | 'C' | 'D'

interface TestModalProps {
  testType: TestType | null
  onClose: () => void
}

export default function TestModal({ testType, onClose }: TestModalProps) {
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<AnswerLetter[]>([])
  const [selected, setSelected] = useState<AnswerLetter | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [resultType, setResultType] = useState<AnswerLetter | null>(null)

  const questions = testType === 'passion' ? passionQuestions : skillQuestions
  const letters: AnswerLetter[] = ['A', 'B', 'C', 'D']

  // Reset state when opening
  useEffect(() => {
    if (testType) {
      setCurrentQ(0)
      setAnswers([])
      setSelected(null)
      setShowResult(false)
      setResultType(null)
    }
  }, [testType])

  const handleSelect = (letter: AnswerLetter) => {
    setSelected(letter)
    setTimeout(() => {
      const newAnswers = [...answers, letter]
      if (currentQ + 1 >= questions.length) {
        // Calculate result
        const counts: Record<AnswerLetter, number> = { A: 0, B: 0, C: 0, D: 0 }
        newAnswers.forEach((a) => counts[a]++)
        const dominant = (Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0]) as AnswerLetter
        setResultType(dominant)
        setShowResult(true)
      } else {
        setCurrentQ(currentQ + 1)
        setSelected(null)
      }
      setAnswers(newAnswers)
    }, 300)
  }

  const handleDownload = () => {
    if (!testType || !resultType) return
    const result = resultMap[testType][resultType]

    const content = `MAN TO MAN BY OURDAYS
============================

${result.label.toUpperCase()}: ${result.type}

${result.desc}

REKOMENDASI BUKU:
${result.books.map((b, i) => `${i + 1}. ${b}`).join('\n')}

SKILL YANG PERLU DIKEMBANGKAN:
${result.skills.map((s, i) => `${i + 1}. ${s}`).join('\n')}

============================
Man to Man by Ourdays
"Untuk pria yang tidak berhenti tumbuh."
by.ourdays | @by.ourdays
`
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `ManToMan-${result.type.replace(/\s+/g, '-')}-Result.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  const result = testType && resultType ? resultMap[testType][resultType] : null
  const progress = showResult ? 100 : (currentQ / questions.length) * 100
  const q = !showResult ? questions[currentQ] : null

  if (!testType) return null

  return (
    <div
      className={`modal-overlay ${testType ? 'active' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="modal-box">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-6 text-[var(--text-dim)] hover:text-[var(--text)] transition-colors text-xl leading-none bg-transparent border-none cursor-pointer"
        >
          ×
        </button>

        {!showResult && q ? (
          <>
            {/* Question header */}
            <p className="text-[0.55rem] tracking-[0.45em] uppercase text-[var(--text-dim)] mb-2">
              {testType === 'passion' ? 'Passion Test' : 'Skill Test'} · {currentQ + 1} / {questions.length}
            </p>
            <h2 className="font-cormorant font-bold text-white text-[1.6rem] mb-1">
              {testType === 'passion' ? 'Temukan Passionmu.' : 'Kenali Skillmu.'}
            </h2>
            <p className="font-cormorant italic text-[var(--text-mid)] text-[0.95rem] mb-8 leading-[1.6]">
              Pilih jawaban yang paling menggambarkan dirimu saat ini, bukan yang ideal.
            </p>

            {/* Progress */}
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>

            {/* Question */}
            <p className="font-cormorant font-semibold text-[var(--text)] text-[1.15rem] mb-6 leading-[1.45]">
              {q.q}
            </p>

            {/* Options */}
            <div className="flex flex-col">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  className={`option-btn ${selected === letters[i] ? 'selected' : ''}`}
                  onClick={() => handleSelect(letters[i])}
                >
                  <span className="text-[0.55rem] tracking-[0.2em] text-[var(--text-dim)] w-4 shrink-0">
                    {letters[i]}
                  </span>
                  {opt}
                </button>
              ))}
            </div>
          </>
        ) : result ? (
          <>
            {/* Result */}
            <p className="text-[0.55rem] tracking-[0.45em] uppercase text-[var(--text-dim)] mb-6">
              Hasil {testType === 'passion' ? 'Passion' : 'Skill'} Test
            </p>

            <div
              className="mb-8 p-8"
              style={{ border: '2px solid #2e2e2e', background: 'var(--bg)' }}
            >
              <p className="text-[0.55rem] tracking-[0.4em] uppercase text-[var(--text-dim)] mb-2">
                {result.label}
              </p>
              <h2 className="font-cormorant font-bold text-white text-[2rem] mb-4 leading-none">
                {result.type}
              </h2>
              <p className="font-cormorant italic text-[var(--text-mid)] text-[1rem] leading-[1.75] mb-6">
                {result.desc}
              </p>

              {/* Books */}
              <div className="mb-4">
                <p className="text-[0.58rem] tracking-[0.3em] uppercase text-[var(--text-dim)] mb-3">
                  Rekomendasi Buku
                </p>
                {result.books.map((b, i) => (
                  <div
                    key={i}
                    className="py-2 text-[var(--text-mid)] text-[0.78rem]"
                    style={{ borderTop: i === 0 ? '1px solid #2e2e2e' : '1px solid #1c1c1c' }}
                  >
                    {b}
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div>
                <p className="text-[0.58rem] tracking-[0.3em] uppercase text-[var(--text-dim)] mb-3">
                  Skills to Develop
                </p>
                <div className="flex flex-wrap gap-2">
                  {result.skills.map((s, i) => (
                    <span
                      key={i}
                      className="text-[0.55rem] tracking-[0.25em] uppercase text-[var(--text-dim)] px-3 py-1"
                      style={{ border: '2px solid #2e2e2e' }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <button
              onClick={handleDownload}
              className="w-full py-3 text-[0.6rem] tracking-[0.3em] uppercase font-medium transition-all duration-300 mb-3 cursor-pointer"
              style={{ background: 'var(--white)', color: 'var(--bg)', border: 'none' }}
            >
              Download Hasil (.txt)
            </button>
            <button
              onClick={() => {
                setCurrentQ(0)
                setAnswers([])
                setSelected(null)
                setShowResult(false)
                setResultType(null)
              }}
              className="w-full py-3 text-[0.6rem] tracking-[0.3em] uppercase text-[var(--text-mid)] hover:text-[var(--text)] transition-all duration-300 cursor-pointer bg-transparent"
              style={{ border: '2px solid #2e2e2e' }}
            >
              Ulangi Test
            </button>
          </>
        ) : null}
      </div>
    </div>
  )
}
