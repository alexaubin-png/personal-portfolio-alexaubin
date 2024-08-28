import React, { useState } from "react";
import {Link} from 'react-router-dom'
import "./Home.css";
import Profile from "../components/Profile";
import BadgeContainer from "./badgeContainer";
import Navbar from './Navbar.jsx'

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
    <div>
   
      <div className="homePage">
      <h1 className="Name-Header">Alex J. Aubin</h1>
      <div className="Button-Container">
      <Link to="/Websites"><button className="Button-VideoGames">Websites</button></Link>
      <button className="Websites">Video Games</button>
      </div>
      <h1 className="Personal-Header">Personal Portfolio</h1>
      <p>Ive created from scratch, A MERN stack APP to hold my portfolio. On This website you can find all all my porjects and view them, view my resume/badges/certificates. Or print physical copies of my reume, effectivley to contact me and hopefully hire me, Or use my contact form.</p>
        </div>
        <img className="background" src='/src\assets\homepage.PNG'></img>
        <Profile />
      </div>
  );
}
