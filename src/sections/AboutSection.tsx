import { forwardRef } from "react"
import MainLayout from "../layouts/MainLayout"
import AboutPart from "../components/about/AboutPart"
import SkillPart from "../components/about/SkillPart"

const AboutSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <MainLayout
      imageClass="bg-[url('/2.jpg')]"
      center={false}
      className="grid w-full items-center gap-8 px-10 py-10 md:grid-cols-2"
      ref={ref}
      {...props}
    >
      <AboutPart />
      <SkillPart />
    </MainLayout>
  )
})

export default AboutSection
