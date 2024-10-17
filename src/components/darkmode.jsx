// DarkMode.js
import React from 'react';
import { useDarkMode } from './DarkModeContext.jsx'; // Use curly braces for named export
import './darkmode.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default function DarkMode() {
    const { isDarkMode, toggleMode } = useDarkMode();

    return (
   
  <section  className='content-container' style={{
    width: '250px',

    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    borderRadius: '10px',
    position: 'absolute',
    top: '8%',
    left: '5%',
    transform: 'translate(-50%, -50%)',
    transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',


    background: 'transparent',
    backgroundColor: 'none',
    color: isDarkMode ? '#FFFFFF' : '#000000',
           
        }}>
      <button 
    className='toggle-style-button' 
    onClick={toggleMode}
    style={{
        padding: '10px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: isDarkMode ? '#444' : '#ddd',
        color: isDarkMode ? '#fff' : '#000',
        transition: 'background-color 0.3s',
    }}
>
    <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} size="lg" />
</button>
        </section>
    );
}
