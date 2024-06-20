import React from "react"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
const TypingText: React.FC = () => {
  const childVariant = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  }
  const parentVariant = {
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.3 }
    }
  }

  return (
    <motion.div
      variants={parentVariant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="absolute top-[28%] min-w-full px-4 sm:static sm:min-w-0 sm:px-0"
    >
      <motion.p
        className="block w-full animate-spin2 bg-gradient-to-r from-[#fffcdc] via-purple-300 to-[#b86499] bg-clip-text text-center text-2xl font-bold text-transparent [background-size:300%_300%] sm:text-left sm:text-3xl"
        variants={childVariant}
      >
        Oh Hi, It's
      </motion.p>

      <motion.div variants={childVariant}>
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
          className="mt-4 block w-full bg-gradient-to-r from-[#bc5f5c] via-[#ba56fc] to-[#565bfc] bg-clip-text text-4xl font-bold text-transparent max-sm:text-center sm:text-6xl"
        />
      </motion.div>

      <motion.div variants={childVariant}>
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
          className="bold mt-2 block text-lg text-slate-200 max-sm:text-center sm:text-xl"
        />
      </motion.div>
    </motion.div>
  )
}

export default TypingText
