import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa6"
import { HoverBorderGradient } from "../ui/HoverBorderGradient"

const icons = [
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/muhammad-iqbal-ramadhan-90b7302a4"
  },
  { icon: <FaGithub />, url: "https://github.com/arayamusawwah" },
  { icon: <FaEnvelope />, url: "mailto:miramadhan354@gmail.com" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/elite.iqbal" }
]

const IconContainer = () => {
  return (
    <div className="flex flex-row gap-10">
      {icons.map((icon, index) => (
        <HoverBorderGradient
          containerClassName={`rounded-full border-[2px] border-white/20 animate-floating duration-[10s]`}
          style={{ animationDelay: `${index * 0.1}s` }}
          as="button"
          className="border-1 flex items-center justify-center p-4"
        >
          <a
            key={index}
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border-none outline-none *:text-5xl"
          >
            {icon.icon}
          </a>
        </HoverBorderGradient>
      ))}
    </div>
  )
}

export default IconContainer
