import React from "react"

interface Props {
  isActive: boolean
  homeRef: React.RefObject<HTMLElement>
  aboutRef: React.RefObject<HTMLElement>
  contactRef: React.RefObject<HTMLElement>
  projectRef: React.RefObject<HTMLElement>
}

const Navigation: React.FC<Props> = ({
  isActive,
  homeRef,
  aboutRef,
  contactRef,
  projectRef
}) => {
  const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    })
  }

  return (
    <ul
      className={`flex w-full justify-center gap-2 text-lg transition-opacity *:font-semibold  *:text-white hover:*:text-violet-500 sm:gap-6 sm:*:text-xl ${!isActive ? "scale-0" : "scale-100 delay-700"}`}
    >
      <li>
        <button onClick={() => scrollToRef(homeRef)}>Home</button>
      </li>

      <li>
        <button onClick={() => scrollToRef(aboutRef)}>About</button>
      </li>

      <li>
        <button onClick={() => scrollToRef(projectRef)}>Projects</button>
      </li>

      <li>
        <button onClick={() => scrollToRef(contactRef)}>Contact</button>
      </li>
    </ul>
  )
}

export default Navigation
