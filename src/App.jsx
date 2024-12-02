import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Navbar from './components/Navbar';
import ImageGallery from './components/ImageGallery';
import SocialNavigation2 from './components/SocialNavigation';
import Footer from './components/footer';
import Hobbies from './components/Hobbies';
import Auth from './components/auth.jsx';
import Blogs from './components/Blogs.jsx';
import Why from './components/Why.jsx';
import HomeFlexBox from './components/HomeFlexBox.jsx';
import ExpressP from './components/paragrpahExpress.jsx';
import FullstackP from './components/FullstackParagraph.jsx';
import JSDev from './components/JavaScriptDevP.jsx';
import ReactP from './components/ReactP.jsx';
import Websites from './components/Websites.jsx';
import BlogSection from './components/Blogs.jsx';
import Chatbot from './components/chatbot.jsx';
import Profile from './components/Profile.jsx';
import Capstone from './components/Capstone.jsx';
import DarkMode from './components/darkmode.jsx'; // Ensure this is your dark mode toggle
import VideoGames from './components/Videogames.jsx'
// import Article from './components/article.jsx'
import { DarkModeProvider, useDarkMode } from './components/DarkModeContext.jsx'; // Adjust the path as necessary

function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
}

function AppContent() {
  const { isDarkMode } = useDarkMode(); // Now this is safe

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <Router>
      <DarkMode /> {/* This can be your toggle component */}
      <Navbar />
      <Routes>
        <Route path='/Videogames-Gallery' element={<VideoGames/>}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path='/ImageGallery' element={<ImageGallery />} />
        <Route path='/SocialNavigation' element={<SocialNavigation2 />} />
        <Route path='/Why' element={<Why />} />
        <Route path='/Hobbies' element={<Hobbies />} />
        <Route path='/Auth' element={<Auth />} />
        <Route path='/Blogs' element={<Blogs />} />
        <Route path='/ExpressP' element={<ExpressP />} />
        <Route path='/FullstackP' element={<FullstackP />} />
        <Route path='/JavaScriptFoundations' element={<JSDev />} />
        <Route path='/ReactParagraph' element={<ReactP />} />
        <Route path='/Websites' element={<Websites />} />
        <Route path='/blogSection' element={<BlogSection />} />
        <Route path='/chatbot' element={<Chatbot />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/Capstone' element={<Capstone />} />
        {/* <Route path='/article' element={<Article />}></Route> */}
      </Routes>
 
      <Footer />
    </Router>
  );
}

export default App;
