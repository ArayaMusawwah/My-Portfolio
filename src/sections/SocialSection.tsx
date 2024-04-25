import { forwardRef } from "react"
import MainLayout from "../layouts/MainLayout"

const SocialSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <MainLayout
      className={`grid min-h-screen place-items-center bg-[url('/2.jpg')] bg-cover bg-center`}
      {...props}
      ref={ref}
    >
      <h1 className="text-5xl font-bold">Social</h1>
    </MainLayout>
  )
})

export default SocialSection
