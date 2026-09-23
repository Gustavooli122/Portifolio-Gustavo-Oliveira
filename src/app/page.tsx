import { Navbar } from "../components/portfolio/navbar"
import { Hero } from "../components/portfolio/hero"
import { About } from "../components/portfolio/about"
import { Technologies } from "../components/portfolio/technologies"
import { Projects } from "../components/portfolio/projects"
import { Skills } from "../components/portfolio/skills"
import { Contact } from "../components/portfolio/contact"
import { Footer } from "../components/portfolio/footer"
import { BackToTop } from "../components/portfolio/back-to-top"

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
