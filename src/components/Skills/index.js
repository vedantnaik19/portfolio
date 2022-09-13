import { useEffect, useState } from "react";

import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import Sphere from "../Sphere";
import "./index.scss";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

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
            I have firsthand knowledge of technologies such as the MERN stack,
            MEAN stack, and PERN stack. In addition, I have created mobile apps
            with Flutter. I am not a designer, but I have a fair understanding
            of UI/UX design and use Figma to create it.
          </p>
          <p align="LEFT">
            Besides, I also have experience with Python, Android, Bootstrap,
            Firebase, Git and ML.
          </p>
        </div>
        <Sphere className="skills-cloud" />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Skills;
