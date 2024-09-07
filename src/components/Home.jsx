import React, { useState } from "react";
import {Link} from 'react-router-dom'
import "./Home.css";

export default function Home() {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // // Define styles for light and dark modes
  // const lightModeStyle = {
  //   backgroundColor: "#FFFFFF",
  //   color: "#000000",
  // };

  // const darkModeStyle = {
  //   backgroundColor: "#000000",
  //   color: "#FFFFFF",
  // };

  // // Function to toggle between light and dark mode
  // const toggleMode = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  // // Determine current mode styles
  // const currentModeStyles = isDarkMode ? darkModeStyle : lightModeStyle;

  // Additional styles for inspirational paragraph

  return (
    <>
     <div>
   
   <div className="homePage">
     <img alt='just_background' className='background-home' src='../assets/LIQL6416.PNG'></img>
   <h1 className="Name-Header">Alex J. Aubin</h1>
   <div className="Button-Container">
   <Link to="/Websites"><button className="Button-VideoGames">Websites</button></Link>
   <button className="Websites">Video Games</button>
   </div>
   <h1 className="Personal-Header">Personal Portfolio</h1>
   <p>Ive created from scratch, A MERN stack APP to hold my portfolio. On This website you can find all all my porjects and view them, view my resume/badges/certificates. Or print physical copies of my reume, effectivley to contact me and hopefully hire me, Or use my contact form.</p>
     </div>
     <h1 className='article-header'>Schedule a appointment with me</h1>
   <Link to='/Contact'><img src='https://i.gyazo.com/b1fd172fcc2ff613949dac8a388e9202.png' alt='email-link' className='main-image-home' /></Link> 
    <div className="container-home">
      <img src='https://i.gyazo.com/ff2955592fa0d4590447ed55983521cc.png' className='homeImage-1' alt='#'></img>
      <a href='#'></a>
      <img src='https://i.gyazo.com/b76ca267ea50de2a190ab84331cfce99.jpg' className='homeImage2' alt='#'></img>
      <a href='#'></a>
      <img src='https://i.gyazo.com/b76ca267ea50de2a190ab84331cfce99.jpg' className='homeImage3' alt='#'></img>
      <a href='#'></a>
    </div>
    <div className="content-home">
      <h2 className='content-header'>Who I am + my skiils</h2>
      <p className='content-home-text' alt='#'>As a software developer/web developer, I specialize in creating, designing, and maintaining software applications and websites tailored to meet specific user needs and business objectives. For my freelancing clients, I will provide a range of services including developing custom websites and web applications, optimizing user interfaces for enhanced functionality and performance, integrating backend systems, and ensuring robust security measures.  </p>
    </div>
     </div>
    
    </>
 
   

  );
}
