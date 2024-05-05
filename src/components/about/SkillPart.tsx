import React from "react"
import HtmlLogo from "../../assets/html.svg"
import CssLogo from "../../assets/css.svg"
import JsLogo from "../../assets/javascript.svg"
import TsLogo from "../../assets/typescript.svg"
import NodeLogo from "../../assets/nodejs.svg"
import TailwindLogo from "../../assets/tailwind.svg"
import ExpressLogo from "../../assets/express-js.svg"
import NextjsLogo from "../../assets/nextjs.svg"
import ReactLogo from "../../assets/react.svg"
import VueLogo from "../../assets/vue-js.svg"
import MongoDbLogo from "../../assets/mongodb.svg"
import MySqlLogo from "../../assets/mysql.svg"
import GitLogo from "../../assets/git.svg"
import DockerLogo from "../../assets/docker.svg"
import LogoSkills from "../utils/LogoSkills"
import { motion } from "framer-motion"

const SkillPart: React.FC = () => {
  const logos = [
    { logo: HtmlLogo, alt: "HTML" },
    { logo: CssLogo, alt: "CSS" },
    { logo: JsLogo, alt: "JavaScript" },
    { logo: TsLogo, alt: "TypeScript" },
    { logo: NodeLogo, alt: "Node.js" },
    { logo: TailwindLogo, alt: "Tailwind" },
    { logo: ExpressLogo, alt: "Express.js" },
    { logo: NextjsLogo, alt: "Next.js" },
    { logo: ReactLogo, alt: "React" },
    { logo: VueLogo, alt: "Vue.js" },
    { logo: MongoDbLogo, alt: "MongoDB" },
    { logo: MySqlLogo, alt: "MySQL" },
    { logo: GitLogo, alt: "Git" },
    { logo: DockerLogo, alt: "Docker" },
    { logo: LogoSkills, alt: "Other" }
  ]

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
      className="w-full justify-self-end px-4"
      variants={divVariants}
      transition={{ duration: 1 }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="mockup-window relative flex border border-white bg-base-300">
        <h2 className="absolute left-1/2 top-4 -translate-x-1/2 font-mono">
          Skills and Tools
        </h2>

        <ul className="flex flex-wrap justify-center gap-2 bg-gray-200 px-4 py-16">
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
