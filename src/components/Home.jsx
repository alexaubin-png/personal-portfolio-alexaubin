import React, { useState } from 'react';
import './Home.css';
import HomeFlexBox from '../components/HomeFlexBox';

export default function Home() {
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

  // Determine current mode styles
  const currentModeStyles = isDarkMode ? darkModeStyle : lightModeStyle; 

  // Additional styles for inspirational paragraph

  return (
    <div>
      <div style={currentModeStyles}>
        {/* <img className='backgroundImage' src='src\assets\XGWC2016.PNG'></img> */}
        <div style={currentModeStyles} className='text-overlay'>
          Hello, I'm Alex Aubin. I'm intensively pursuing my <strong>software development certificate</strong> at Upright Education.
        </div>
      </div>
      <div style={currentModeStyles} className="inspirational-paragraph">
        I've recently finished my program, and with the skills I learned at BCA, I'm happy to announce I will be developing software as a passion. If you have an idea for a software application but aren't quite sure how to make it work, come to me and I'll be your best solution. There's an art to making full stack web applications, additionally a variety of qualifications/skills implemented to achieve a successful project.
      </div>
      <HomeFlexBox />
      <div className="typing-animation">
        I'm excited to work on other projects.
      </div>
    </div>
  );
}
