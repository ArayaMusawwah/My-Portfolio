import React, { useEffect } from "react"
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
import AOS from "aos"
import LogoSkills from "../utils/LogoSkills"

const SkillPart: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 500 })
  }, [])
  return (
    <div data-aos="fade-left" className="w-full justify-self-end px-4">
      <div className="mockup-window relative flex border border-white bg-base-300">
        <h2 className="absolute left-1/2 top-4 -translate-x-1/2 font-mono">
          Skills and Tools
        </h2>
        <div className="flex flex-wrap justify-center gap-2 bg-slate-200 px-4 py-16">
          <div
            data-aos="fade-left"
            data-aos-delay="100"
            className="group relative inline"
          >
            <LogoSkills logo={HtmlLogo} alt="HTML5" />
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="group relative inline "
          >
            <LogoSkills logo={CssLogo} alt="CSS" />
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className="group relative inline"
          >
            <LogoSkills logo={JsLogo} alt="JavaScript" />
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className="group relative inline"
          >
            <LogoSkills logo={TsLogo} alt="TypeScript" />
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="500"
            className="group relative inline"
          >
            <LogoSkills logo={NodeLogo} alt="Node.js" />
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="600"
            className="group relative inline"
          >
            <LogoSkills logo={TailwindLogo} alt="TailwindCSS" />
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="700"
            className="group relative inline"
          >
            <LogoSkills logo={ExpressLogo} alt="Express.js" />
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="800"
            className="group relative inline"
          >
            <LogoSkills logo={NextjsLogo} alt="Next.js" />
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="1000"
            className="group relative inline"
          >
            <LogoSkills logo={ReactLogo} alt="React" />
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="1100"
            className="group relative inline"
          >
            <LogoSkills logo={VueLogo} alt="Vue.js" />
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="1200"
            className="group relative inline"
          >
            <LogoSkills logo={MongoDbLogo} alt="MongoDB" />
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="1300"
            className="group relative inline"
          >
            <LogoSkills logo={MySqlLogo} alt="MySQL" />
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="1400"
            className="group relative inline"
          >
            <LogoSkills logo={GitLogo} alt="Git" />
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="1500"
            className="group relative inline"
          >
            <LogoSkills logo={DockerLogo} alt="Docker" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillPart
