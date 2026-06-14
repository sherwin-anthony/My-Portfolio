import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Experience } from '../components/Experience'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'

function Home() {
  return (
    <>
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-foreground focus:shadow-[var(--shadow-card)] focus:outline-2 focus:outline-ring"
        href="#main-content"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Home
