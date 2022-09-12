import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-v.png'
import Logo from './Logo'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const myNameIsArray = ['I', ' ', 'a', 'm']
  const nameArray = ['e', 'd', 'a', 'n', 't', ' ', 'N', 'a', 'i', 'k']

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={myNameIsArray}
              idx={15}
            />
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          </h1>
          <h2>Fullstack Developer / Entrepreneur</h2>
          <div className='button-tab'>
            <Link to="/contact" className="flat-button">
              <FontAwesomeIcon
                icon={faDownload}
                color="#"
                className="anchor-icon"
              />{' '}
              DOWNLOAD CV
            </Link>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
