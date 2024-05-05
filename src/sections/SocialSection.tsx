import { forwardRef } from "react"
import MainLayout from "../layouts/MainLayout"

import TimelineStart from "../components/social/TimelineStart"
import TimelineEnd from "../components/social/TimelineEnd"

const SocialSection = forwardRef<HTMLDivElement>((props, ref) => {
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
