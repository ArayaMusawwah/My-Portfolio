import { forwardRef } from "react"
import MainLayout from "../layouts/MainLayout"
import TypingText from "../components/home/TypingText"
import Hero from "../components/home/Hero"

/* type RefComponentProps<T extends HTMLElement> = React.HTMLProps<T> & {
  ref?: React.Ref<T>
} */

const HomeSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <MainLayout
      ref={ref}
      imageClass={`bg-[url('/1.jpg')] bg-cover bg-center bg-no-repeat`}
      className="flex-col items-center justify-center font-roboto sm:flex-row sm:justify-between md:px-4 xl:px-[7%]"
      {...props}
    >
      <TypingText />
      <Hero />
    </MainLayout>
  )
})

export default HomeSection
