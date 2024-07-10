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
import SocialNavigation2 from './components/SocialNavigation';
import Footer from './components/footer';
import RecentProject from './components/RecentProject';
import Hobbies from './components/Hobbies'
function App() {
  return (
 
  <Router>
    <Navbar />
 
    <HomeFlexBox />
    <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
     <Route path="/Contact" element={<Contact />} />
     <Route path="/Resume" element={<Resume />} />
     <Route path="/Projects" element={<Projects />} />
     <Route path='/ImageGallery' element={<ImageGallery />}/>
     <Route path="/HomeFlexBox" element={<HomeFlexBox />} /> 
     <Route path='/SocialNavigation' element={<SocialNavigation2/>}/>
     <Route path='/Hobbies' element={<Hobbies />}/>
   </Routes>
   <Footer />
 </Router>
  );
}

export default App;
