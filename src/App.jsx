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
import Auth from './components/auth.jsx'
import Blogs from './components/Blogs.jsx'
import Why from './components/Why.jsx'
import HomeFlexBox  from './components/HomeFlexBox.jsx';
import ExpressP from './components/paragrpahExpress.jsx'
import FullstackP from './components/FullstackParagraph.jsx'
import JSDev from './components/JavaScriptDevP.jsx';
import ReactP from './components/ReactP.jsx'
import Websites from './components/Websites.jsx'

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
  <BrowserRouter>
  <Router>
    <Navbar />
    <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
     <Route path="/Contact" element={<Contact />} />
     <Route path="/Resume" element={<Resume />} />
     <Route path='/ImageGallery' element={<ImageGallery />}/>
     <Route path='/SocialNavigation' element={<SocialNavigation2/>}/>
     <Route path='/Why' element={<Why />}/>
     <Route path='/Hobbies' element={<Hobbies />}/>
     <Route path='/Auth' element={<Auth />}/>
     <Route path='/Blogs' element={<Blogs />}/>
     <Route path='/ExpressP' element={<ExpressP/>}></Route>
     <Route path='/FullstackP' element={<FullstackP/>}></Route>
     <Route path='/JavaScriptFoundations' element={<JSDev/>}></Route>
     <Route path='/ReactParagraph' element={<ReactP/>}></Route>
     <Route path='/Websites' element={<Websites />}></Route>
   </Routes>
   <HomeFlexBox />
   <Footer />
 </Router>
 </BrowserRouter>
  );
}

export default App;
