import { motion } from "framer-motion"

const ProjectTitle = ({
  className,
  mobile
}: {
  className?: string
  mobile?: boolean
}) => {
  return (
    <motion.h2
      className={`mr-24 text-5xl font-bold uppercase text-slate-200 ${className}`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      viewport={{ once: true }}
      style={
        !mobile ? { writingMode: "vertical-lr" } : { writingMode: "unset" }
      }
    >
      My{" "}
      <span className="bg-gradient-to-b from-[#bc5f5c] via-[#ba56fc] to-[#565bfc] bg-clip-text text-transparent">
        Projects
      </span>
    </motion.h2>
  )
}
export default ProjectTitle
