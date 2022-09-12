import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import Me from '../../../assets/images/me.svg'
import './index.scss'

const Logo = () => {
 
  
  return (
    <div className="logo-container" >
      <img className='floating'
        src={Me}
        alt="Vedant Naik"
      />

     
    </div>
  )
}

export default Logo
