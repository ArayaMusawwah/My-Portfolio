import React from "react"

interface Props {
  isActive: boolean
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

const NavbarButton: React.FC<Props> = ({ isActive, setIsActive }) => {
  return (
    <button
      className={`group absolute flex size-16 flex-col items-center justify-center space-y-1 rounded-full border border-white bg-white/10 backdrop-blur-sm *:transition *:duration-300 *:ease-in-out sm:size-20 ${isActive ? "-z-10 opacity-0" : "opacity-100"}`}
      onClick={() => setIsActive((prev) => !prev)}
    >
      <span
        className={`mx-auto h-[0.2rem] w-10 rounded-md bg-white group-hover:-translate-y-[0.2225rem] sm:h-1 ${!isActive ? "scale-x-100 delay-300" : "scale-x-0"}`}
      ></span>
      <span
        className={`mx-auto h-[0.2rem] w-10 rounded-md bg-white group-hover:translate-y-[0.2225rem] sm:h-1 ${!isActive ? "scale-x-100 delay-300" : "scale-x-0"}`}
      ></span>
    </button>
  )
}

export default NavbarButton
