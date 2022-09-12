import { useEffect, useState } from "react"

import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters"
import Sphere from "../Sphere"
import "./index.scss"

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate")

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 3000)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Skills".split("")}
              idx={15}
            />
          </h1>
          <p>
            I got a master's degree in computing science from the University of
            East Anglia. and am presently looking for a job at an established IT
            firm where I can work with cutting-edge technology on challenging
            and diversified projects.
          </p>
          <p align="LEFT">
            I have three years of expertise in full-stack development and have
            built and deployed applications for a few small businesses, I have
            also co-founded three startups in the micro-mobility, food delivery,
            and IoT sectors. I've worked in software development, mobile app
            development, front-end/back-end development, database/server
            administration and UI design.{" "}
          </p>
          <p>
            If I need to define myself in one sentence that would be a
            confident, calm, and curious individual who enjoys learning new
            things.
          </p>
        </div>
        <Sphere className="skills-cloud"/>

      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills
