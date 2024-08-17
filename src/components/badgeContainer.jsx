import React from 'react'
import { Link } from 'react-router-dom'
import badge1 from '../assets/badge 1png.png'
import badge2 from '../assets/Fullstack JS badge4.png'
import badge3 from '../assets/Javascript badge3.png'
import badge4 from '../assets/react badge proper dimensions.png'
import ExpressP from './paragrpahExpress.jsx'

export default function badgeContainer() {
  return (
    <div>
    <div className="badge-container">
        <Link to='/ExpressP'>
        <img className='badge1' src={badge1}></img>
        </Link>
        <Link to='/FullstackP'>
        <img className='Fullstack'src={badge2}></img>
        </Link>
        <Link to='/JavaScriptFoundations'>
        <img className='Javascript' src={badge3}></img>  
        </Link>
      <Link to='/ReactParagraph'>
      <img className='react-badge' src={badge4}></img>
      </Link>
      </div>

    </div>
  )
}
