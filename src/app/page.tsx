import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <div data-section="home">
        <Hero />
      </div>
      <div data-section="about">
        <About />
      </div>
      <div data-section="skills">
        <Skills />
      </div>
      <div data-section="projects">
        <Projects />
      </div>
      <div data-section="blog">
        <Blog />
      </div>
      <div data-section="contact">
        <Contact />
      </div>
    </>
  )
}
