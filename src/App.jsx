import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {useState} from 'react'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import ImageGallery from './components/ImageGallery';
import HomeFlexBox from './components/HomeFlexBox';
import SocialNavigation from './SocialNavigation';
import Footer from './components/footer';
import TestLogo from './components/testlogo';
import RecentProject from './components/RecentProject';
 
function App() {
  return (
  <Router>
    <Navbar />
    <TestLogo />
    <HomeFlexBox />
    <SocialNavigation />
    <RecentProject/>
    <Footer />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/About" element={<About />} />
     <Route path="/Contact" element={<Contact />} />
     <Route path="/Resume" element={<Resume />} />
     <Route path="/Projects" element={<Projects />} />
     <Route path='/ImageGallery' element={<ImageGallery />}/>
     {/* <Route path="/homeFlexBox" element={<homeFlexBox />} /> */}
     
   </Routes>
 </Router>
  );
}

export default App;
