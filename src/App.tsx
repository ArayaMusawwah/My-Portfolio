import React, { useContext, useRef } from "react"
import HomeSection from "./sections/HomeSection"
import AboutSection from "./sections/AboutSection"
import ContactSection from "./sections/ContactSection"
import LogoNavbar from "./sections/LogoNavbar"
import { ActiveContext } from "./contexts/ActiveContext"
import AnotherProgressBar from "./components/AnotherProgressBar"
import ProjectsSection from "./sections/ProjectsSection"

const App: React.FC = () => {
  const { isActive } = useContext(ActiveContext)

  const mainRef = useRef<HTMLDivElement | null>(null)
  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const projectRef = useRef<HTMLDivElement>(null)

  return (
    <main className="overflow-hidden " ref={mainRef}>
      <AnotherProgressBar />
      <LogoNavbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
        projectRef={projectRef}
      />
      <div
        className={`overflow-auto transition-all duration-700 ease-in-out ${window.scrollY > 0 && isActive ? "origin-center scale-105 blur-md backdrop-filter" : "scale-100"}`}
      >
        {/* TODO:
            1. Enhance Text style
         */}

        <HomeSection ref={homeRef} />
        <AboutSection ref={aboutRef} />
        <ProjectsSection ref={projectRef} />
        <ContactSection ref={contactRef} />
      </div>
    </main>
  )
}

export default App
