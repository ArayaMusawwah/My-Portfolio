import { forwardRef } from "react"
import MainLayout from "../layouts/MainLayout"

const SocialSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <MainLayout
      imageClass="bg-[url('/2.jpg')]"
      center={true}
      {...props}
      ref={ref}
    >
      <h1 className="text-5xl font-bold">Social</h1>
    </MainLayout>
  )
})

export default SocialSection
