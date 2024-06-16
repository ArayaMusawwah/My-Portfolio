import React from "react"
import HeroImage from "../../assets/2ndhero.png"
import { motion } from "framer-motion"
const Hero: React.FC = () => {
  return (
    <motion.div
      className="animate-gradiate relative mr-10 grid h-96 w-[22.5%] place-items-center rounded-3xl bg-[linear-gradient(60deg,#f79533,#f37055,#ef4e7b,#a166ab,#5073b8,#1098ad,#07b39b,#6fba82)] [background-size:400%_400%]
      "
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-2 grid place-items-center rounded-[1.35rem] bg-[#1d1d1d]">
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
