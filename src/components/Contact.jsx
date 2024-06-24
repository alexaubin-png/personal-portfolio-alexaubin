//twitter/instagram/github
import React from 'react'


export default function Contact() {
  return (
  <>
  <div className="contact-container2">
  <h1 class='center-Blog'>Contact Me</h1>
  <p class='contact-tag'>Hello, good ways to contact me are through cellphone/Linked-in,instagram, and twitter direct Messages. I have provived links to all those platforms below</p>
  <ul class='contact-UL'>
    <li>Phone: 802 557-7719</li>
    <li>Twitter</li>
    <li>Instagram</li>
    <li>Linked-in</li>
  </ul>
  </div>
  <div className="contact-container">
  <h2 class='contact-form-header'>Contact Me Via Form</h2>
  <label>name:
  <input type='name'></input>
  </label>
  <label>email:
  <input type='email'></input>
  </label><br></br>
  <label>Message:
    <input type='text'></input>
  </label>
  <button>Send Message</button>
  </div>
 
  
  </>
    // <div>
    //   <div class='wrap'><p class='HireMe'>Hire Me </p><p class='AnOrSimble'> | </p>
    //   <a href='../src/components/Contact.jsx'> <img className='Img' src='../Speech Bubble 2.0.webp'></img></a>  
    //   </div>
    //   {/* <p>Contact</p> */}
    // </div>
  )
}
