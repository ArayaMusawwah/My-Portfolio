import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import React from "react"
import ImageProject from "../Projects/ImageProject"
import { projects } from "@/data/datum"
import { motion } from "framer-motion"
const ProjectsCarousel: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Carousel className="w-full max-w-7xl" opts={{ loop: true }}>
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="ml-2 basis-1/2 py-10 pl-6">
              <ImageProject imagePath={project.url} title={project.title} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-slate-800" />
        <CarouselNext className="bg-slate-800" />
      </Carousel>
    </motion.div>
  )
}

export default ProjectsCarousel
