import { forwardRef } from "react"
import MainLayout from "../layouts/MainLayout"
import ProjectsCarousel from "../components/social/ProjectsCarousel"
import { motion } from "framer-motion"
import Projects from "@/components/social/Projects"

const ProjectsSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <MainLayout
      imageClass="bg-[url('/4.jpg')]"
      className="flex-row-reverse gap-4"
      center={true}
      {...props}
      ref={ref}
    >
      {/* TODO: 1. Link to porject 2. penjelasan web saat di hover */}
      <motion.h2
        className="mr-24 text-4xl font-bold uppercase text-slate-200"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        style={{ writingMode: "vertical-rl" }}
      >
        My{" "}
        <span className="bg-gradient-to-b from-[#bc5f5c] via-[#ba56fc] to-[#565bfc] bg-clip-text text-transparent">
          Projects
        </span>
      </motion.h2>

      <Projects />
    </MainLayout>
  )
})

export default ProjectsSection
