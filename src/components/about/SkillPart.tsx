import React from "react"
import LogoSkills from "../utils/LogoSkills"
import { motion } from "framer-motion"
import { logos } from "@/data/datum"

const SkillPart: React.FC = () => {
  const divVariants = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: "0%", opacity: 1 }
  }
  const liVariant = {
    initial: { y: "100%", opacity: 0 },
    animate: (index: number) => ({
      y: "0%",
      opacity: 1,
      transition: { delay: 0.05 * index, duration: 0.5, when: "beforeChildren" }
    })
  }

  return (
    <motion.div
      variants={divVariants}
      transition={{ duration: 1 }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="w-full justify-self-end px-4"
    >
      <div className="mockup-browser bg-base-300 border">
        <div className="mockup-browser-toolbar">
          <div className="input">https://arayamusawwah.com/skills+tools</div>
        </div>
        <ul className="flex flex-wrap justify-center gap-2 bg-zinc-900 px-4 py-16">
          {logos.map((logo, index) => (
            <motion.li
              className="group relative"
              key={index}
              variants={liVariant}
              initial="initial"
              whileInView="animate"
              custom={index}
              viewport={{ once: true }}
            >
              <LogoSkills
                key={index}
                logo={typeof logo.logo === "string" ? logo.logo : ""}
                alt={logo.alt}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default SkillPart
