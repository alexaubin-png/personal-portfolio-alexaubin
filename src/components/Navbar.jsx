//navigation bar to navigate user through, Contact, About, projects, resume, home
import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import '../Navbar.css'
import SpeechBubble from './SpeechBubble'
// import '../App.jsx'

export default function Navbar() {//the image tag should take the user to a form that automates an email from myself and then taking them to a styles contact page
//   const [menu, setMenu] = useState(false)
// function toggleMenu(e){
//   e.preventDefault()
// setMenu(!menu)
// }
  return (
//put the software dev picutres/logos ina diff file because it doesnt realte to navigation
<div className="navbar">
  




   <div class='container2'>
  <div className="content">
  <button className='HireMeButton'><a href='/Contact'>Hire Me</a></button>
  <button className='MenuButton'><a href='/ImageGallery'>Menu</a></button>
  <li className='Img-label'><a className='relative-image'href='/'><img class='image' src='HFWV2189.PNG'></img>Home</a></li>
  
{/* 
    <ul className='unorderdList'>
      <li className='Img-label'><a href='/'><img class='image' src='HFWV2189.PNG'></img>Home</a></li>
      <li><a href='/About'>About</a></li>
      <li><a href='/Resume'>Resume</a></li>
      <li><a href='/Projects'>Projects</a></li>
      <li><a href='/Contact'>Contact</a ></li>
    </ul> */}
  </div>
</div>
<div className="second-navbar">
<li><a href='#'>Resume</a></li>
<li><a href='#'>About</a></li>
<li><a href='#'>test</a></li>
<li><a href='#'>test</a></li>

</div>
 </div>

   //nav bar commented out because it was not needed atm
  //   <nav className='navbar'>
  //     <ul>
  //     <li><Link path='/About'>About</Link ></li>
  //     <li><Link path='/Projects'>Projects</Link ></li>
  //     <li><Link path='/Resume'>Job History</Link ></li>
  //     <li><Link path='/Contact'>Contact</Link ></li>
  //   </ul>
 
  // </nav>
  )
}
