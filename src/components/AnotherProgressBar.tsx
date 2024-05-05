import React from "react"
import { motion, useScroll } from "framer-motion"

const AnotherProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll()

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 w-full">
      <motion.div
        className="h-[2px] w-full origin-left bg-gradient-to-r from-pink-500 to-cyan-500 transition-all duration-[100ms] ease-in-out"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  )
}

export default AnotherProgressBar
