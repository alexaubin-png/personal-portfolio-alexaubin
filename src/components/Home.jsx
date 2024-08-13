import React, { useState } from "react";
import "./Home.css";
import Profile from "../components/Profile";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Define styles for light and dark modes
  const lightModeStyle = {
    backgroundColor: "#FFFFFF",
    color: "#000000",
  };

  const darkModeStyle = {
    backgroundColor: "#000000",
    color: "#FFFFFF",
  };

  // Function to toggle between light and dark mode
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Determine current mode styles
  const currentModeStyles = isDarkMode ? darkModeStyle : lightModeStyle;

  // Additional styles for inspirational paragraph

  return (
  
    <div style={currentModeStyles}>
      <h1 className='inspiration-header'>Hello im Alex Aubin, and im a certified software developer</h1>       
      <div className="inspirational-paragraph">
        I've recently finished my program, and with the skills I learned at BCA, I'm happy to announce I will be developing software as a passion. If you have an idea for a software application but aren't quite sure how to make it work, come to me and I'll be your best solution. There's an art to making full stack web applications, additionally a variety of qualifications/skills implemented to achieve a successful project. A little less than 30 days prior to obtaining my certificate in Java Script Foundations, I couldnt be more excited to start applying and eventually take up a job as a software developer.
      </div>   
      <Profile />
      </div>
  );
}
