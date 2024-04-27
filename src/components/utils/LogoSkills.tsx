import React from "react"

interface Props {
  logo: string
  alt: string
}

const LogoSkills: React.FC<Props> = ({ logo, alt }) => {
  return (
    <>
      <img
        src={logo}
        alt={alt}
        className="inline size-20 scale-95 grayscale transition-all ease-in hover:scale-110 hover:grayscale-0"
      />
      <span className="absolute -top-12 left-1/2 origin-bottom -translate-x-1/2 translate-y-6 scale-x-0 rounded-md bg-gray-700 px-4 py-2 text-white transition-all group-hover:block group-hover:translate-y-0 group-hover:scale-x-100 group-hover:delay-[400ms]">
        {alt}
      </span>
    </>
  )
}

export default LogoSkills
