//a description of how im pursuing software development, how long, why dev, my name, where im from.
import React from 'react'
import './About.css'


export default function About() {

  
  return (
    <>
    <div  className="about-container">
       <div >
          <h1 className='About-Header'>About Me</h1>
          <p className='About-Paragraph'>At 22 years old, hailing from a small town in Vermont, 
        I ventured into programming initially drawn by the intensive learning, money to be made, and experience with computers. Over time, my journey has been enriched 
        by a deep-seated passion for computers—an admiration stemming from their complexity and transformative power. <br></br>
        <br></br>
        
          Beyond coding, 
        I find joy in snowboarding, reliving the thrill of gliding down slopes, and cherish moments spent with friends, 
        whose company adds vibrancy to my life. I want to do my entire part, with providing software to the community, and or working on large scale repos.
        Some goals I plan to reach with the skills deemed rellevant by Burlington Coding Acadmey are more training, plus take certain programs like OWASP, and certain courses that teach python, java, and or type-script.
      I also think its important to learn a different stack, so possiblly pursure learning knowledge with the framework angular.</p>
      </div>
      </div>
        <div className="double-container">
          <div className='profile-container'>
            <img className='profile-picture' alt='Profile' />
            <h1 className='my-name-profile'>Alex Aubin</h1>
            {/* <label href='' className='profile-Education'>Certificate</label> */}
            {/* <a className='profile-badges' href='https://gyazo.com/4118a7b8c93a4b3173ccd6549e8802ba'>badges</a><br></br> */}
            <a className='profile-certificate' href='https://gyazo.com/fba38f035969bc4cb8049b775c7da68f'>Certificate</a>
            <div className='Profile-Details'>
              <label className='email-label'>EMAIL</label>
              <p>alexjames4674@gmail.com</p>
              <label>PHONE</label>
              <p>802-557-7719</p>
              <label>BIRTHDAY</label>
              <p>01/26/2002</p> 
              <label>LOCATION</label>
              <p>05452 Vermont</p>
            </div>
          </div>
        </div>
</>
  


  )
}
