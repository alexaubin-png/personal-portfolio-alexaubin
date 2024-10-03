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
      {/* <div className="container2"> */}
        <div className="content">
          <button className='HireMeButton'><Link to='/Contact'>Hire Me</Link></button>
          <button className='MenuButton'><Link to='/ImageGallery'>Gallery</Link></button>
          <li className='Img-label'><Link className='relative-image' to='/'><img className='image' src={myFace} alt="Home"></img>Home</Link></li>
        </div>
      {/* </div> */}
      <div className="second-navbar">
        <li><Link to='/Resume'>Resume</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Hobbies'>Hobbies</Link></li>
        <li><Link to='#'>Work History</Link></li>
        <li><Link to='/SocialNavigation'>Socials</Link></li>
        <li><Link to='/Auth'>Login</Link></li>
        {/* <li><Link to='/blogSection'>Blogs</Link></li> */}
        <li><Link to='/chatbot'>chatbot</Link></li>
        {/* Toggle mode button */}
        {/* <button  className="mode-toggle-button" onClick={toggleMode}>
          Dark Mode
        </button> */}
      </div>
      
      {/* <img className='hireme-background' src='/src\assets\LIQL6416.PNG' alt='background image for hire me section'></img> */}
      </div>


    
    
  );
}

export default Navbar;
