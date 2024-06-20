import { forwardRef } from "react"
import MainLayout from "../layouts/MainLayout"
import GradientBar from "@/components/contact/GradientBar"
import IconContainer from "@/components/contact/IconContainer"
import { motion } from "framer-motion"

const ContactSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <MainLayout
      imageClass="bg-[url('/3.1.jpg')]"
      center={false}
      ref={ref}
      className="relative flex-col"
      {...props}
    >
      <div className="flex h-[45rem] w-full flex-col items-center justify-center overflow-hidden rounded-md">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 2 } }}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="relative z-20 text-center text-3xl font-bold text-white md:text-6xl lg:text-8xl">
            Just{" "}
            <span className="bg-gradient-to-br from-[#bc5f5c] via-[#ba56fc] to-[#565bfc] bg-clip-text text-transparent">
              Contact
            </span>{" "}
            Me!
          </h1>

          <GradientBar />
        </motion.div>

        <IconContainer />
      </div>

      <footer className="absolute bottom-0 right-0 text-sm font-light text-gray-400">
        @2024 Arμ's Corp. &copy; All Right Reserved.
      </footer>
    </MainLayout>
  )
})

export default ContactSection
