import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Testimonials } from "@/components/testimonials"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <div className="grid-pattern fixed inset-0 z-0 opacity-20"></div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
