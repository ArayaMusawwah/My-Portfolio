import { forwardRef, useEffect } from "react"
import MainLayout from "../layouts/MainLayout"
import AOS from "aos"
import TimelineStart from "../components/social/TimelineStart"
import TimelineEnd from "../components/social/TimelineEnd"

const SocialSection = forwardRef<HTMLDivElement>((props, ref) => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <MainLayout
      imageClass="bg-[url('/4.jpg')]"
      center={true}
      {...props}
      ref={ref}
    >
      <ul className="timeline">
        <TimelineStart title="makan" />
        <TimelineEnd title="minum" />
        <TimelineStart title="makan" />

        <TimelineEnd title="minum" />
        <TimelineStart title="makan" />

        <TimelineEnd title="minum" />
        <TimelineStart title="makan" />

        <TimelineEnd title="minum" />
      </ul>
    </MainLayout>
  )
})

export default SocialSection
