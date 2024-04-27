import React, { useEffect } from "react"
import LogoImage from "../../assets/Logo.png"
import AOS from "aos"
import { TypeAnimation } from "react-type-animation"
const AboutPart: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  return (
    <div className="mockup-phone" data-aos="fade-right">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1 relative bg-slate-200 font-mono text-base-300">
          <div
            className="absolute top-20 flex w-max items-center justify-center gap-4"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            <img src={LogoImage} alt="Arμ's logo" className=" size-20 invert" />
            <h2 className="mt-8 text-xl font-bold">Arμ's Corp &copy;</h2>
          </div>
          <div className="prose mt-32 px-8 font-mono text-base-300">
            <TypeAnimation
              sequence={[
                `Arμ's Corp &corp; is a company founded by Arμ. Arμ's Corp. is a company founded by Araya Musawwah | Muhammad Iqbal Ramadhan. \n\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, esse odit, alias magnam facere molestiae labore consectetur ut.`,
                1000
              ]}
              speed={80}
              className="whitespace-pre-wrap"
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
    </div>
  )
  {
    /* <div data-aos="fade-right">

      

      
    </div> */
  }
}

export default AboutPart
