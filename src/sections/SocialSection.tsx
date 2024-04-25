import { forwardRef, useEffect } from "react"
import MainLayout from "../layouts/MainLayout"
import AOS from "aos"

const SocialSection = forwardRef<HTMLDivElement>((props, ref) => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <MainLayout
      imageClass="bg-[url('/2.jpg')]"
      center={true}
      {...props}
      ref={ref}
    >
      <h1 className="text-5xl font-bold" data-aos="fade-up">
        Social
      </h1>
    </MainLayout>
  )
})

export default SocialSection
