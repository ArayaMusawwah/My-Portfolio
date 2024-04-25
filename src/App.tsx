import React, { useContext, useRef } from "react"
import HomeSection from "./sections/HomeSection"
import AboutSection from "./sections/AboutSection"
import ContactSection from "./sections/ContactSection"
import SocialSection from "./sections/SocialSection"
import LogoNavbar from "./sections/LogoNavbar"
import { ActiveContext } from "./contexts/ActiveContext"

const App: React.FC = () => {
  const { isActive } = useContext(ActiveContext)

  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  const socialRef = useRef(null)

  return (
    <div className="overflow-hidden">
      <LogoNavbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
        socialRef={socialRef}
      />
      <div
        className={`transition-all duration-700 ease-in-out ${window.scrollY > 0 && isActive ? "origin-center scale-105 blur-md" : "scale-100"}`}
      >
        <HomeSection ref={homeRef} />
        <AboutSection ref={aboutRef} />
        <ContactSection ref={contactRef} />
        <SocialSection ref={socialRef} />
      </div>
    </div>
  )
}

export default App
