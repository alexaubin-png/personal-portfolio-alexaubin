import React from 'react'
import { Link } from 'react-router-dom'
import '../HomeFlexBox.css'
export default function homeFlexBox() {
  return (
  <>
  <div className="mobileResponsive-container">
  <div className="container-flex">
      <div className='box1'>why choose us?<Link path='/Why'></Link></div>
    <div className='box2'>Partners
      <a className='hyperLinkBox2' href='https://sagepvp.org/'><p>Click to view  a gaming server I moderate</p></a>
    </div>
    <div className='box3'> github<br></br>alexaubinpng
      <a className='hyperLinkBox3' href='https://github.com/alexaubin-png'><p>Follow my code</p></a>
    </div>
    <div className='box4'>Youtube Channel
      <a className='hyperLinkBox4' href='https://www.youtube.com/channel/UCKbH5EL_UHepYyqj4TTp1Lw'><p>Click to view all my videos</p></a>
    </div>
  </div>
  </div>
  </> 
  )
}
