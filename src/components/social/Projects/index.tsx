import React from "react"
import FirstProject from "./FirstProject"
import SecondProject from "./SecondProject"
import ThirdProject from "./ThirdProject"
import FourthProject from "./FourthProject"
import FifthProject from "./FifthProject"

const Projects: React.FC = () => {
  return (
    <ul className="timeline p-10">
      <FirstProject />
      <SecondProject />
      <ThirdProject />
      <FourthProject />
      <FifthProject />
    </ul>
  )
}

export default Projects
