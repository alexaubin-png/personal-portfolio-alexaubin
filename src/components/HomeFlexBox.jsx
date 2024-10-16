import React from 'react'
import { Link } from 'react-router-dom'
import './HomeFlexBox.css'
export default function homeFlexBox() {
  return (
  <>
  <div className="mobileResponsive-container">
  <div className="container-flex">
      <div className='box1'>why choose us?<Link path='/Why'></Link>
      <p className='box1-p'>View my written article!<a><button className='box1-btn'>here</button></a></p>
      </div>
   
    <div className='box2'>Partners
    
      <p className='box2-p'>NA<br></br>   <a className='hyperLinkBox2' href=''><button className='box2-btn'>here</button></a></p>
    </div>
    <div className='box3'> github<br></br>alexaubinpng
      
      <p className='box3-p'>Immerse into my open source projects.<br></br><a className='hyperLinkBox3' href='https://github.com/alexaubin-png'><button className='box3-btn'>here</button></a></p>
    </div>
    <div className='box4'>Youtube Channel
     
      <p className='box4-p'>Checkout my youtube videos!<br></br> <a className='hyperLinkBox4' href='https://www.youtube.com/channel/UCKbH5EL_UHepYyqj4TTp1Lw'><button className='box4-btn'>here</button></a></p>
    </div>
  </div>
  </div>
  </> 
  )
}