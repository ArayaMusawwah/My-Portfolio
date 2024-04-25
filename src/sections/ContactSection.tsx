import { forwardRef } from "react"
import MainLayout from "../layouts/MainLayout"

const ContactSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <MainLayout
      className="grid min-h-screen place-items-center bg-[url('/3.jpg')] bg-cover bg-center"
      ref={ref}
      {...props}
    >
      <h1 className="text-5xl font-bold">contact</h1>
    </MainLayout>
  )
})

export default ContactSection
