import React, { useCallback, useEffect, useState } from "react"

const ProgressBar = ({ target }: { target: React.RefObject<HTMLElement> }) => {
  const [readingProgress, setReadingProgress] = useState<number>(0)

  const scrollListener = useCallback(() => {
    if (!target.current) return

    const element = target.current
    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight
    const windowScrollTop =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop
    if (windowScrollTop === 0) return setReadingProgress(0)
    if (windowScrollTop > totalHeight) return setReadingProgress(100)

    setReadingProgress(Math.round((windowScrollTop / totalHeight) * 100))
  }, [target])

  useEffect(() => {
    window.addEventListener("scroll", scrollListener)
    return () => window.removeEventListener("scroll", scrollListener)
  }, [scrollListener])

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 w-full">
      <div
        className="h-[2px] bg-gradient-to-r from-pink-500 to-cyan-500 transition-all duration-[100ms] ease-in-out"
        style={{ width: `${readingProgress}%` }}
      />
    </div>
  )
}

export default ProgressBar
