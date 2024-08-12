import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import myFace from '../assets/HFWV2189.png'
const DownloadButton= () => {

const pdfURL = ''
}
const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Define styles for light and dark modes
  const lightModeStyle = {
    backgroundColor: '#FFFFFF',
    color: '#000000',
  };

  const darkModeStyle = {
    backgroundColor: '#000000',
    color: '#FFFFFF',
  };

  // Function to toggle between light and dark mode
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply dark mode styles conditionally
  const currentModeStyles = isDarkMode ? darkModeStyle : lightModeStyle;

  
  return (
    <div style={currentModeStyles} className="navbar">
      <div className="container2">
        <div className="content">
          <button className='HireMeButton'><Link to='/Contact'>Hire Me</Link></button>
          <button className='MenuButton'><Link to='/ImageGallery'>Gallery</Link></button>
          <li className='Img-label'><Link className='relative-image' to='/'><img className='image' src={myFace} alt="Home"></img>Home</Link></li>
        </div>
      </div>
      <div className="second-navbar">
        <li><Link to='/Resume'>Resume</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Hobbies'>Hobbies</Link></li>
        <li><Link to='#'>Work History</Link></li>
        <li><Link to='/SocialNavigation'>Socials</Link></li>
        <li><Link to='/Auth'>Login</Link></li>
        {/* Toggle mode button */}
        <button className="mode-toggle-button" onClick={toggleMode}>
          Dark Mode
        </button>
      </div>
   
      <div >
        {/* <img className='backgroundImage' src='src\assets\XGWC2016.PNG'></img> */}
       
      </div>
      <div className="inspirational-paragraph">
        {/* I've recently finished my program, and with the skills I learned at BCA, I'm happy to announce I will be developing software as a passion. If you have an idea for a software application but aren't quite sure how to make it work, come to me and I'll be your best solution. There's an art to making full stack web applications, additionally a variety of qualifications/skills implemented to achieve a successful project. A little less than 30 days prior to obtaining my certificate in Java Script Foundations, I couldnt be more excited to start applying and eventually take up a job as a software developer. */}
      </div>

      <div className='typing-animation'>
        I'm excited to work on other projects.
      </div>
    
        </div>

    
    
  );
}

export default Navbar;
