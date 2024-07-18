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
import SocialNavigation2 from './components/SocialNavigation';
import Footer from './components/footer';
import RecentProject from './components/RecentProject';
import Hobbies from './components/Hobbies'
import Auth from './components/auth.jsx'
function App() {
  const lightMode = [
    { backgroundColor: '#FFFFFF', color: '#000000' },
    { backgroundColor: '#000000', color: '#FFFFFF' }
  ]
  const darkMode = [
    { backgroundColor: '#000000', color: '#FFFFFF' },
    { backgroundColor: '#FFFFFF', color: '#000000' }
  ]
  
  return (
 
  <Router>
    <Navbar />
    <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
     <Route path="/Contact" element={<Contact />} />
     <Route path="/Resume" element={<Resume />} />
     <Route path="/Projects" element={<Projects />} />
     <Route path='/ImageGallery' element={<ImageGallery />}/>
     <Route path='/SocialNavigation' element={<SocialNavigation2/>}/>
     <Route path='/Hobbies' element={<Hobbies />}/>
     <Route path='/Auth' element={<Auth />}></Route>
   </Routes>
   <Footer />
 </Router>
  );
}

export default App;
