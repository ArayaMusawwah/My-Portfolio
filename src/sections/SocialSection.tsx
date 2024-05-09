import { forwardRef } from "react"
import MainLayout from "../layouts/MainLayout"
import ProjectsCarousel from "../components/social/ProjectsCarousel"
import { motion } from "framer-motion"

const SocialSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <MainLayout
      imageClass="bg-[url('/4.jpg')]"
      className="flex-col gap-10"
      center={true}
      {...props}
      ref={ref}
    >
      {/* TODO: 1. Link to porject 2. penjelasan web saat di hover */}
      <ProjectsCarousel />
      <motion.h2
        className="text-4xl font-bold uppercase text-slate-200"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        My Projects
      </motion.h2>
    </MainLayout>
  )
})

export default SocialSection
