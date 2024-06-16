import { forwardRef } from "react"

interface Props {
  children: React.ReactNode
  className?: string
  center?: boolean
  imageClass?: string
}

const MainLayout = forwardRef<HTMLDivElement, Props>(
  ({ children, className, center, imageClass }, ref) => {
    return (
      <section
        className={`relative min-h-screen overflow-y-auto bg-gray-950 text-slate-200 transition-all ${imageClass} absolute inset-0 flex bg-cover bg-center bg-no-repeat transition-all ${center && "items-center justify-center"} ${className}`}
        ref={ref}
      >
        {children}
      </section>
    )
  }
)

export default MainLayout
