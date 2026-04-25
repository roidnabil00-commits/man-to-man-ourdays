import Navbar from '@/components/Navbar'
import Community from '@/components/sections/Community'

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px] min-h-screen" style={{ background: 'var(--bg)' }}>
        <Community />
      </main>
    </>
  )
}