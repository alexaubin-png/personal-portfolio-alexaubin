import React from 'react'
import { Link } from 'react-router-dom'
import './HomeFlexBox.css'
export default function homeFlexBox() {
  return (
  <>
  <div className="mobileResponsive-container">
<div className='box1'>why choose us?<Link path='/Why'></Link>
<p className='box1-p'>View my written article!<a ><button className='box1-btn'>here</button></a></p>
</div>

<div className='box2'>Clients Product<br></br><p>Indygo Bus Stops</p>

<p className='box2-p'>My Proudest and most robust project<br></br>provided to a client<br></br>   <a className='hyperLinkBox2' href='https://capstone-indygo-react-capstone-magic-q6li.onrender.com/'><button className='box2-btn'>here</button></a></p>
</div>
<div className='box3'> Upright Education<br></br>

<p className='box3-p'>This is the academy that educated me in software.<br></br><a className='hyperLinkBox3' href='https://github.com/alexaubin-png'><button className='box3-btn'>here</button></a></p>
</div>
<div className='box4'>Youtube Channel

<p className='box4-p'>Checkout my youtube videos!<br></br> <a className='hyperLinkBox4' href='https://www.youtube.com/channel/UCKbH5EL_UHepYyqj4TTp1Lw'><button className='box4-btn'>here</button></a></p>
</div>

</div>

  </> 
  )
}