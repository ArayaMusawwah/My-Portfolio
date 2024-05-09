import React from "react"

interface Props {
  imagePath: string
  title: string
}

const ImageProject: React.FC<Props> = ({ imagePath, title }) => {
  return (
    <div
      className={`mockup-browser bg-base-300 max-w-md [box-shadow:0px_0px_12px_1px_#68D2E8]`}
    >
      <div className="mockup-browser-toolbar">
        <div className="input">{title}</div>
      </div>
      <div className="bg-base-200 flex justify-center ">
        <img src={imagePath} alt={title} className="w-full" />
      </div>
    </div>
  )
}

export default ImageProject
