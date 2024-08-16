import React from 'react'
import { Link } from 'react-router-dom'
import './HomeFlexBox.css'
export default function homeFlexBox() {
  return (
  <>
  <div className="mobileResponsive-container">
  <div className="container-flex">
      <div className='box1'>why choose us?<Link path='/Why'></Link>
      <p className='box1-p'>View my written article!<button className='box1-btn'>here</button></p>
      </div>
   
    <div className='box2'>Partners
      <a className='hyperLinkBox2' href='https://sagepvp.org/'></a>
      <p className='box2-p'>View sagepvps beautiful website.<br></br><button className='box2-btn'>here</button></p>
    </div>
    <div className='box3'> github<br></br>alexaubinpng
      <a className='hyperLinkBox3' href='https://github.com/alexaubin-png'></a>
      <p className='box3-p'>Immerse into my open source projects.<br></br><button className='box3-btn'>here</button></p>
    </div>
    <div className='box4'>Youtube Channel
      <a className='hyperLinkBox4' href='https://www.youtube.com/channel/UCKbH5EL_UHepYyqj4TTp1Lw'></a>
      <p className='box4-p'>Checkout my youtube videos!<br></br><button className='box4-btn'>here</button></p>
    </div>
  </div>
  </div>
  </> 
  )
}