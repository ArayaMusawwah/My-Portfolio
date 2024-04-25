import React from "react"
import HeroImage from "../assets/2ndhero.png"

const Hero: React.FC = () => {
  return (
    <div
      className="relative mr-10 grid h-96 w-[22.5%] animate-gradiate place-items-center rounded-3xl bg-[linear-gradient(60deg,#f79533,#f37055,#ef4e7b,#a166ab,#5073b8,#1098ad,#07b39b,#6fba82)] [background-size:400%_400%]
      "
    >
      <div className="absolute inset-1 grid place-items-center rounded-[1.35rem] bg-gradient-to-t from-slate-900 to-gray-950">
        <img
          src={HeroImage}
          alt="hero's photo"
          className="h-full origin-bottom scale-95 object-cover"
        />
      </div>
    </div>
  )
}

export default Hero
