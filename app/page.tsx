import { Navbar } from '@/components/navigation'
import { Footer } from '@/components/layout'
import { Hero } from '@/components/hero'
import { Stats } from '@/components/stats'
import { About } from '@/components/about'
import { Education } from '@/components/education'
import { Experience } from '@/components/experience'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Research } from '@/components/research'
import { Certifications } from '@/components/certifications'
import { Achievements } from '@/components/achievements'
import { Contact } from '@/components/contact'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Stats />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Research />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
