import React from "react"
import HeroImage from "../../assets/2ndhero.png"
import { motion } from "framer-motion"
const Hero: React.FC = () => {
  return (
    <motion.div
      className="absolute grid h-[43vh] w-2/3 animate-gradiate place-items-center rounded-3xl bg-[linear-gradient(60deg,#f79533,#f37055,#ef4e7b,#a166ab,#5073b8,#1098ad,#07b39b,#6fba82)] [background-size:400%_400%] max-sm:bottom-10 sm:relative sm:mr-10 sm:h-96 sm:w-[22.5%]"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-1 grid place-items-center overflow-hidden rounded-[1.35rem] bg-[#060b0e]">
        <img
          src={HeroImage}
          alt="hero's photo"
          className="h-full origin-bottom scale-95 object-cover"
        />
      </div>
    </motion.div>
  )
}

export default Hero
