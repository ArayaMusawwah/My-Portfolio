import React, { useContext, useEffect, useRef } from "react"
import Logo from "../assets/Logo.png"
import Navigation from "../components/Navigation"
import NavbarButton from "../components/NavbarButton"
import { ActiveContext } from "../contexts/ActiveContext"

interface Props {
  homeRef: React.RefObject<HTMLElement>
  aboutRef: React.RefObject<HTMLElement>
  contactRef: React.RefObject<HTMLElement>
  projectRef: React.RefObject<HTMLElement>
}

const LogoNavbar: React.FC<Props> = ({
  homeRef,
  aboutRef,
  contactRef,
  projectRef
}) => {
  const { isActive, setIsActive } = useContext(ActiveContext)

  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setIsActive(false)
    }

    document.addEventListener("click", handleClickOutside)

    return () => document.removeEventListener("click", handleClickOutside)
  }, [isActive, setIsActive])

  if (typeof window !== "undefined") {
    window.onscroll = () => {
      if (window.scrollY > 0) setIsActive(false)
      else setIsActive(true)
    }
  }

  return (
    <header
      className={`fixed left-1/2 z-[999] mt-6 flex w-fit -translate-x-1/2 cursor-pointer items-center justify-center`}
      ref={headerRef}
    >
      <img
        src={Logo}
        alt="logo"
        className={`size-16 opacity-0 transition sm:size-20 ${isActive && "opacity-100"}`}
      />

      <div
        className={`duration-[600ms] ease-[cubic-bezier(0.380,0.365,0.025,0.785)] absolute flex  items-center justify-center space-y-2 rounded-md border border-white bg-white/10 backdrop-blur-sm transition-all ${isActive ? "mt-48 h-[4rem] w-[20rem] sm:h-[4.5rem] sm:w-[26rem]" : "size-[5.5rem] md:size-[6.5rem]"}`}
      >
        <Navigation
          isActive={isActive}
          homeRef={homeRef}
          aboutRef={aboutRef}
          contactRef={contactRef}
          projectRef={projectRef}
        />
        <NavbarButton isActive={isActive} setIsActive={setIsActive} />
      </div>
    </header>
  )
}

export default LogoNavbar
