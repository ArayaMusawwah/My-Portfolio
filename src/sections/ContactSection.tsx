import { forwardRef, useEffect } from "react"
import MainLayout from "../layouts/MainLayout"
import AOS from "aos"

const ContactSection = forwardRef<HTMLDivElement>((props, ref) => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  })

  return (
    <MainLayout
      imageClass="bg-[url('/3.jpg')]"
      center={false}
      ref={ref}
      {...props}
    >
      <h1 className="text-5xl font-bold" data-aos="fade-up">
        contact
      </h1>
    </MainLayout>
  )
})

export default ContactSection
