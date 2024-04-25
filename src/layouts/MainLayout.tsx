import { forwardRef } from "react"

interface Props {
  children: React.ReactNode
  className?: string
}

const MainLayout = forwardRef<HTMLDivElement, Props>(
  ({ children, className }, ref) => {
    return (
      <div
        className={`min-h-screen overflow-x-hidden bg-gray-950 px-[7%] py-10 text-slate-200 transition-all ${className}`}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

export default MainLayout
