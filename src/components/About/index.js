import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNode,
  faNodeJs,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import Flutter from '../../assets/images/flutter.svg'
import Python from '../../assets/images/python.svg'
import Mongo from '../../assets/images/mongodb.svg'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
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
            administration and UI design.{' '}
          </p>
          <p>
            If I need to define myself in one sentence that would be a
            confident, calm, and curious individual who enjoys learning new
            things.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img alt="flutter" src={Flutter} />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faReact} color="#5ED2F3" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faNode} color="#036E02" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faAngular} color="#BD032D" />
            </div>
            <div className="face5">
            <img alt="mongodb" src={Mongo} />

            </div>
            <div className="face6">
            <img alt="python" src={Python} />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
