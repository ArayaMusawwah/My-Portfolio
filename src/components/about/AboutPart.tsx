import React from "react"
import LogoImage from "../../assets/Logo.png"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"

const AboutPart: React.FC = () => {
  const divRef = React.useRef<HTMLDivElement>(null)
  const phoneVariant = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: "0%", opacity: 1 }
  }

  return (
    <motion.div
      ref={divRef}
      className="mockup-phone"
      variants={phoneVariant}
      initial="initial"
      transition={{ duration: 1 }}
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1 relative bg-zinc-900 font-mono text-slate-200">
          <div className="absolute top-14 flex w-max items-center justify-center gap-4">
            <img src={LogoImage} alt="Arμ's logo" className="size-20 " />
            <h2 className="mt-8 text-xl font-bold">Arμ's Corp &copy;</h2>
          </div>
          <div className="prose mt-32 px-8 font-mono text-slate-200">
            <TypeAnimation
              sequence={[
                `Arμ's Corp &copy; is a company founded by Arμ. Arμ's Corp. is a company founded by Araya Musawwah | Muhammad Iqbal Ramadhan. \n\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, esse odit, alias magnam facere molestiae labore consectetur ut.`,
                1000
              ]}
              speed={80}
              className="whitespace-pre-wrap"
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default AboutPart
