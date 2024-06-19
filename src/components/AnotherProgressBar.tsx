import React from "react"
import { motion, useScroll } from "framer-motion"

const AnotherProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll()

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-full">
      <motion.div
        className="duration-[100ms] h-full w-[2px] origin-center bg-gradient-to-r from-pink-500 to-cyan-500 transition-all ease-in-out"
        style={{ scaleY: scrollYProgress }}
      />
    </div>
  )
}

export default AnotherProgressBar
