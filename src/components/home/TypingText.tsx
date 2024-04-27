import React from "react"
import { TypeAnimation } from "react-type-animation"

const TypingText: React.FC = () => {
  return (
    <div>
      <TypeAnimation
        sequence={["Oh Hi! It's,", 1000]}
        repeat={Infinity}
        className="block w-fit bg-gradient-to-r from-[#fffcdc] to-[#d9a7c7] bg-clip-text text-5xl font-bold text-transparent"
        cursor={false}
      />
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
        className="mt-4 block w-fit bg-gradient-to-br from-[#bc5f5c] from-40% via-[#ba56fc] to-[#7756fc] bg-clip-text text-6xl font-bold text-transparent "
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