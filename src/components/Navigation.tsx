import React from "react"

interface Props {
  isActive: boolean
  homeRef: React.RefObject<HTMLElement>
  aboutRef: React.RefObject<HTMLElement>
  contactRef: React.RefObject<HTMLElement>
  socialRef: React.RefObject<HTMLElement>
}

const Navigation: React.FC<Props> = ({
  isActive,
  homeRef,
  aboutRef,
  contactRef,
  socialRef
}) => {
  const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "start"
    })
  }

  return (
    <ul
      className={`flex w-full justify-center gap-6 transition-opacity *:text-xl *:font-semibold *:text-white hover:*:text-violet-500 ${!isActive ? "opacity-0" : "opacity-100 delay-700"}`}
    >
      <li>
        <button onClick={() => scrollToRef(homeRef)}>Home</button>
      </li>

      <li>
        <button onClick={() => scrollToRef(aboutRef)}>About</button>
      </li>

      <li>
        <button onClick={() => scrollToRef(contactRef)}>Contact</button>
      </li>

      <li>
        <button onClick={() => scrollToRef(socialRef)}>Social</button>
      </li>
    </ul>
  )
}

export default Navigation
