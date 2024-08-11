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
      <Profile />
  );
}
