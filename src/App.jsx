import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
// import {useState} from 'react'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Navbar from './components/Navbar';
import ImageGallery from './components/ImageGallery';
import SocialNavigation2 from './components/SocialNavigation';
import Footer from './components/footer';
import RecentProject from './components/RecentProject';
import Hobbies from './components/Hobbies'
import Auth from './components/Auth.jsx'
import Blogs from './components/Blogs.jsx'
import Why from './components/Why.jsx'
function App() {
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
  <Router>
    <Navbar />
    <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
     <Route path="/Contact" element={<Contact />} />
     <Route path="/Resume" element={<Resume />} />
     <Route path='/ImageGallery' element={<ImageGallery />}/>
     <Route path='/SocialNavigation' element={<SocialNavigation2/>}/>
     <Route path='/Why' element={<Why />}></Route>
     <Route path='/Hobbies' element={<Hobbies />}/>
     <Route path='/Auth' element={<Auth />}></Route>
     <Route path='/Blogs' element={<Blogs />}>Blog</Route>
   </Routes>
   <Footer />
 </Router>
  );
}

export default App;
