import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import Library from '@/components/sections/Library'
import SelfTest from '@/components/sections/SelfTest'
import Community from '@/components/sections/Community'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Library />
      <SelfTest />
      <Community />
      <Footer />
    </main>
  )
}
