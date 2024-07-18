//twitter/instagram/github
import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
  <>
   <div className="contact-container2">
    <h1 className='center-Blog'>Contact Me</h1>
    <p className='contact-tag'>Hello, good ways to contact me are through cellphone/Linked-in,instagram, and twitter direct Messages. I have provived links to all those platforms below</p>
    <ul className='contact-UL'>
      <li>Phone: 802 557-7719</li>
      <li>Twitter</li>
      <li>Instagram</li>
      <li>Linked-in</li>
    </ul>
  <div className="contact-container">
    <h2 className='contact-form-header'>Contact Me Via Form</h2>
    <label className='name-label'>name:
    <input className='name-input' type='name'></input>
    </label>
    <label className='email-label'>email:
    <input  className='email-input' type='email'></input>
    </label><br></br>
    <label className='Message-Label'>Message:
    <input className='message-input' type='text'></input>
  </label>
  <button className='message-button'>Send Message</button>
  </div>
  </div>
</>
  )
}
