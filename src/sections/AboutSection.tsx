import { forwardRef } from "react"
import MainLayout from "../layouts/MainLayout"

const AboutSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <MainLayout
      imageClass="bg-[url('/4.jpg')]"
      center={true}
      ref={ref}
      {...props}
    >
      <h1 className="text-5xl font-bold">about</h1>
    </MainLayout>
  )
})

export default AboutSection
