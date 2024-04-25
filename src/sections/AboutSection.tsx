import { forwardRef, useEffect } from "react"
import MainLayout from "../layouts/MainLayout"
import AOS from "aos"

const AboutSection = forwardRef<HTMLDivElement>((props, ref) => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  return (
    <MainLayout
      imageClass="bg-[url('/4.jpg')]"
      center={true}
      ref={ref}
      {...props}
    >
      <h1 className="text-5xl font-bold" data-aos="fade-up">
        about
      </h1>
    </MainLayout>
  )
})

export default AboutSection
