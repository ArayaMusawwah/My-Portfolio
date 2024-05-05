import { forwardRef } from "react"
import MainLayout from "../layouts/MainLayout"

const ContactSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <MainLayout
      imageClass="bg-[url('/3.jpg')]"
      center={false}
      ref={ref}
      {...props}
    >
      <h1 className="text-5xl font-bold">contact</h1>
    </MainLayout>
  )
})

export default ContactSection
