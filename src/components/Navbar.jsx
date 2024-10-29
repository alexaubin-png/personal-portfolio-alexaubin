import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import myFace from '../assets/HFWV2189.png';


const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.clear();
    setIsLoggedIn(false); // Update login status
    alert("Successfully logged out!");
    navigate("/");
  }  
const isGuestMode = () => {
  localStorage.setItem("token");
  setIsLoggedIn(true); // Update login status
  navigate("/");
}


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Convert token to boolean
  }, []);

  // Define styles for light and dark modes
  const styles = {
    backgroundColor: isDarkMode ? '#000000' : '#FFFFFF',
    color: isDarkMode ? '#FFFFFF' : '#000000',
  };

  // Function to toggle between light and dark mode
  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div style={styles} className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
      &#9776; {/* Hamburger icon */}

      </div>
      <div className={`menu ${isMenuOpen ? 'show' : ''}`}>
      <div className="content">
        <button className='HireMeButton'><Link to='/Contact'>Hire Me</Link></button>
        <button className='MenuButton'><Link to='/ImageGallery'>Gallery</Link></button>
        <li className='Img-label'><Link className='relative-image' to='/'><img className='image' src={myFace} alt="Home" />Home</Link></li>
      </div>
      
      <div className="second-navbar">
        <li><Link to='/Resume'>Resume</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Hobbies'>Hobbies</Link></li>
        {/* <li><Link to='#'>Work History</Link></li> */}
        <li><Link to='/SocialNavigation'>Socials</Link></li>
        <li><Link to='/Auth'>Login</Link></li>
        <li><Link to='/blogSection'>Blogs</Link></li>
        {localStorage.getItem('token')  && (  <button className='logout-button' id='logout-button' onClick={logout} >logout</button>)}


      </div>
      
</div>
      {/* Conditionally render the Profile link */}
      <>
    </>   
    </div>

  );
}

export default Navbar;
