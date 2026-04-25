import Navbar from '@/components/Navbar'
import SelfTest from '@/components/sections/SelfTest'

export default function SelfTestPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px] min-h-screen" style={{ background: 'var(--bg)' }}>
        <SelfTest />
      </main>
    </>
  )
}