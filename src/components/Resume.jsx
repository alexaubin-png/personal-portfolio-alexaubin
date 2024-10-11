import React from 'react';
import './Resume.css';
import { Link } from 'react-router-dom';
import badge1 from '../assets/badge 1png.png';
import badge2 from '../assets/Fullstack JS badge4.png';
import badge3 from '../assets/Javascript badge3.png';
import badge4 from '../assets/react badge proper dimensions.png';
import resumepage1 from '../assets/resume pg1.png';
import resumepage2 from '../assets/resume pg2.png';
import ExpressP from './paragrpahExpress.jsx';

export default function Resume() {
  return (
    <div>
      <div className='Resume-Container'>
        <h1 className='Resume-Header'>Resume</h1>
        <div className='download-links'>
        <a href={resumepage1} download="Resume_Page_1.png" className="download-button">Download Resume Page 1</a><br></br>
        <a href={resumepage2} download="Resume_Page_2.png" className="download-button">Download Resume Page 2</a>
      </div>
        <div className="badge-container">
          <Link to='/ExpressP'>
            <img className='badge1' src={badge1} alt="Badge 1" />
          </Link>
          <Link to='/FullstackP'>
            <img className='Fullstack' src={badge2} alt="Fullstack Badge" />
          </Link>
          <Link to='/JavaScriptFoundations'>
            <img className='Javascript' src={badge3} alt="JavaScript Badge" />
          </Link>
          <Link to='/ReactParagraph'>
            <img className='react-badge' src={badge4} alt="React Badge" />
          </Link>
        </div>
      </div>
      <div className='resume-images'>
        <img className='resume-page-1' src={resumepage1} alt='My Resume Page 1' />
        <img className='resume-page-2' src={resumepage2} alt='My Resume Page 2' />
      </div>
     
    </div>
  );
}
