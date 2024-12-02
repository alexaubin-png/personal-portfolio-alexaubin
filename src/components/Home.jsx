import React, { useState } from "react";
import {Link} from 'react-router-dom'
import HomeFlexBox from './HomeFlexBox.jsx'
import OpenToNetwork from '../assets/porfile-image.png'
import "./Home.css";
import NavBar from './Navbar.jsx'

export default function Home() {
 

  // Additional styles for inspirational paragraph

  return (
    <>
     <div>
   <div className="homePage">
  
   <h1 className="Name-Header">Alex J. Aubin</h1>
   <div className="Button-Container">
   <Link to="/Websites"><button className="Button-VideoGames">Websites</button></Link>
   <Link to='/Videogames-Gallery'><button className="Websites">Video Games</button></Link>
   </div>
   <h1 className="Personal-Header">Personal Portfolio</h1>
   <p>Ive created from scratch, A MERN stack APP to hold my portfolio. On This website you can find all all my porjects and view them, view my resume/badges/certificates. Or print physical copies of my reume, effectivley to contact me and hopefully hire me. </p>
     </div>
     <div className="article-container">
     <h1 className='article-header'>Desired, Dedicated, and Diciplined Software Development</h1>
   <Link to='/Contact'><img src={OpenToNetwork} alt='email-link' className='main-image-home' /></Link> 
    <div className="container-home">
      <img src='https://i.gyazo.com/250f47e97cc602665e226ed2b18b8f2f.png' className='homeImage-1' alt='#'></img>
      <a className="DevZone" href='#'>Checkout my coding course</a>
      <img src='https://i.gyazo.com/b7b0c06553c5c8c72adce98271b1de9d.png' className='homeImage2' alt='#'></img>
      <a className="DevZone" href='#'>Purchase a custom website</a>
      <img src='https://i.gyazo.com/dda60d409d5f24e6560d7637103bb73c.png' className='homeImage3' alt='#'></img>
      <a className='DevZone' href='#'>GitHub</a>
    </div>
    <div className="content-home">
      <h2 className='content-header1'>Who I am + my skills</h2>
      <p className='content-home-text' alt='#'>As a software developer/web developer, I specialize in creating, designing, and maintaining software applications and websites tailored to meet specific user needs and business objectives. For my freelancing clients, I will provide a range of services including developing custom websites and web applications, optimizing user interfaces for enhanced functionality and performance, integrating backend systems, and ensuring robust security measures. Examples rellvant to security measure would include, monitoring all HTTP traffic on a customers website by utlizing IDE's, And encrypting sensitive data like passwords/emails     <HomeFlexBox /></p>
      
    </div>
   
     </div>
  
     </div>
 
    </>
 
   

  );
}
