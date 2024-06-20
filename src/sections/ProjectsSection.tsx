import { forwardRef } from "react"
import MainLayout from "../layouts/MainLayout"
import Projects from "@/components/social/Projects"
import ProjectTitle from "@/components/social/Projects/ProjectTitle"

const ProjectsSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <MainLayout
      imageClass="bg-[url('/4.jpg')]"
      className="flex-col gap-4 px-2 sm:flex-row-reverse"
      center={true}
      {...props}
      ref={ref}
    >
      <ProjectTitle className="max-sm:hidden" />
      <ProjectTitle
        className="mx-auto w-full text-center text-3xl sm:hidden"
        mobile
      />

      <Projects />
    </MainLayout>
  )
})

export default ProjectsSection
