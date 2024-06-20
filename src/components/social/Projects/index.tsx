import { Tabs } from "@/components/ui/Tabs"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"

export default function Projects() {
  const tabs = [
    {
      title: "Project#1",
      value: "project1",
      image: "/project4.png",
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl  bg-blue-300/[0.2] px-10 pb-10 pt-4 text-xl font-bold text-white backdrop-blur-md backdrop-filter md:text-3xl">
          <div className="flex justify-between">
            <p className="[text-shadow:0_0_5px_rgb(0,0,0)]">
              Simple Portfolio Website
            </p>
            <a
              href="https://arayamusawwah.github.io/portfolio-tailwind/"
              target="_blank"
              className="hover:text-purple-500"
            >
              <FaArrowUpRightFromSquare />
            </a>
          </div>
          <Image image={"/project4.png"} alt={"Simple Portfolio Website"} />
        </div>
      )
    },
    {
      title: "Project#2",
      value: "project2",
      image: "/project5.png",
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl  bg-blue-300/[0.2] px-10 pt-4 text-xl font-bold text-white backdrop-blur-md backdrop-filter md:text-3xl">
          <div className="flex justify-between">
            <p className="[text-shadow:0_0_5px_rgb(0,0,0)]">
              Landing Page with Payment Integrated
            </p>
            <a
              href="https://arayamusawwah.github.io/Jo-s-Dream-Coffee-/"
              className="hover:text-purple-500"
            >
              <FaArrowUpRightFromSquare />
            </a>
          </div>
          <Image
            image={"/project5.png"}
            alt={"Landing Page with Payment Integrated"}
          />
        </div>
      )
    },
    {
      title: "Project#3",
      value: "project3",
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl  bg-blue-300/[0.2] px-10 pb-10 pt-4 text-xl font-bold text-white backdrop-blur-md backdrop-filter md:text-3xl">
          <div className="flex justify-between">
            <p className="[text-shadow:0_0_5px_rgb(0,0,0)]">
              Database Integrated WebApp
            </p>
            <a href="" className="hover:cursor-not-allowed">
              <FaArrowUpRightFromSquare />
            </a>
          </div>
          <Image image={"/project1.png"} alt={"Database Integrated WebApp"} />
        </div>
      )
    },
    {
      title: "Project#4",
      value: "project4",
      image: "/project2.png",
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl  bg-blue-300/[0.2] px-10 pb-10 pt-4 text-xl font-bold text-white backdrop-blur-md backdrop-filter md:text-3xl">
          <div className="flex justify-between">
            <p className="[text-shadow:0_0_5px_rgb(0,0,0)]">
              Movie Database WebApp
            </p>
            <a href="" className="hover:cursor-not-allowed">
              <FaArrowUpRightFromSquare />
            </a>
          </div>
          <Image image={"/project2.png"} alt={"Movie Database WebApp"} />
        </div>
      )
    },
    {
      title: "Project#5",
      value: "project5",
      image: "/project3.png",
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl  bg-blue-300/[0.2] px-10 pb-10 pt-4 text-xl font-bold text-white backdrop-blur-md backdrop-filter md:text-3xl">
          <div className="flex justify-between">
            <p className="[text-shadow:0_0_5px_rgb(0,0,0)]">
              Draggable Todo WebApp
            </p>
            <a href="" className="hover:cursor-not-allowed">
              <FaArrowUpRightFromSquare />
            </a>
          </div>
          <Image image={"/project3.png"} alt={"Draggable Todo WebApp"} />
        </div>
      )
    }
  ]

  return (
    <div className="relative mx-auto mt-24 flex h-[20rem] w-full max-w-5xl items-start justify-start gap-8 [perspective:1000px] max-sm:flex-col-reverse md:h-[40rem]">
      <Tabs tabs={tabs} />
    </div>
  )
}

const Image = ({ image, alt }: { image: string; alt: string }) => {
  return (
    <img
      src={image}
      alt={alt}
      className="absolute inset-x-0 bottom-0  mx-auto h-[75%] w-[90%] rounded-xl object-cover object-left sm:-bottom-10 md:h-[90%]"
    />
  )
}
