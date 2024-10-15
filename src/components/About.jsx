//a description of how im pursuing software development, how long, why dev, my name, where im from.
import React from 'react'
import './About.css'


export default function About() {

  
  return (
    <>
  <section clasName='About'>
    <div className="about-img">
      <img className='my-image' src='../src/assets/HFWV2189.png'></img>
    </div>
    <div className="about-content">
<h1>Hi, its <span>Alex</span></h1>
<h3 className='typing-text'>Im a<span></span></h3>
<p className='text-about'>Dedicated software developer at 22 years old, hailing from a small town in Vermont, 
        I ventured into programming initially drawn by the intensive learning, money to be made, and experience with computers. Over time, my journey has been enriched 
        by a deep-seated passion for computers—an admiration stemming from their complexity and transformative power.</p><br></br><p className='text-about'> 
          Beyond coding, 
        I find joy in snowboarding, reliving the thrill of gliding down slopes, and cherish moments spent with friends, 
        whose company adds vibrancy to my life. I want to do my entire part, with providing software to the community, and or working on large scale repos.
        Some goals I plan to reach with the skills deemed rellevant by Burlington Coding Acadmey are more training, plus take certain programs like OWASP, and certain courses that teach python, java, and or type-script.
      I also think its important to learn a different stack, so possiblly pursure learning knowledge with the framework angular.</p>
<div className="reccomendation-boxs"><br></br><h1 className='reccomendation-header'>Reccomendations</h1>
  <a  href="#"><img className='reccomendation1' src='../src/assets/reccomendation1.png'></img></a>
  {/* <a href="#"><img src='../src/assets/linkedin.png'></img></a>
  <a href="#"><img src='../src/assets/github.png'></img></a> */}
</div>
    </div>
    </section>    
</>
  


  )
}
