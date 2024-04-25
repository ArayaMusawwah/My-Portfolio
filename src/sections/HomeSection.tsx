import { forwardRef } from "react"
import MainLayout from "../layouts/MainLayout"

// type RefComponentProps<T extends HTMLElement> = React.HTMLProps<T> & {
//   ref?: React.Ref<T>
// }

const HomeSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <MainLayout
      ref={ref}
      className={`grid min-h-screen place-items-center bg-[url('/1.jpg')] bg-cover bg-center bg-no-repeat`}
      {...props}
    >
      <h1 className="text-5xl font-bold">babi</h1>
    </MainLayout>
  )
})

export default HomeSection
