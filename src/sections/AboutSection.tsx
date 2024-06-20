import { forwardRef } from "react"
import MainLayout from "../layouts/MainLayout"
import AboutPart from "../components/about/AboutPart"
import SkillPart from "../components/about/SkillPart"

const AboutSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <MainLayout
      imageClass="bg-[url('/2.jpg')]"
      center={false}
      className="flex w-full items-center px-10 py-10 max-sm:flex-col max-sm:gap-8 sm:grid sm:grid-cols-2"
      ref={ref}
      {...props}
    >
      <AboutPart />
      <SkillPart />
    </MainLayout>
  )
})

export default AboutSection
