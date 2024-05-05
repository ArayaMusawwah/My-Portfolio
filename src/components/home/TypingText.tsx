import React from "react"
import { TypeAnimation } from "react-type-animation"

const TypingText: React.FC = () => {
  return (
    <div>
      <p className="block w-fit bg-gradient-to-r from-[#fffcdc] to-[#d9a7c7] bg-clip-text text-5xl font-bold text-transparent">
        OH Hi, It's
      </p>

      <TypeAnimation
        sequence={[
          "Muhammad Iqbal Ramadhan",
          2000,
          "Araya Musawwah",
          1000,
          "",
          0
        ]}
        repeat={Infinity}
        className="mt-4 block w-full bg-gradient-to-r from-[#bc5f5c] via-[#ba56fc] to-[#565bfc] bg-clip-text text-6xl font-bold text-transparent "
      />

      <TypeAnimation
        sequence={[
          "A Fullstack Developer",
          1000,
          "A Web Developer",
          1000,
          "A React Developer",
          1000,
          "A Jack Of All Trades Developer",
          1000
        ]}
        deletionSpeed={99}
        speed={80}
        repeat={Infinity}
        className="bold mt-2 block text-xl text-slate-200"
      />
    </div>
  )
}

export default TypingText
