import React from 'react';
import './SocialNavigation.css';

export default function SocialNavigation() {
  return (
    <div className='Parent-Navigation-Container'>
      <label className='Navigation-Socials-Label'>Follow My Socials</label>
      <ul className='Social-Navigation'>
        <li><a href='#'>Twitter</a></li>
        <li><a href='#'>Instagram</a></li>
        <li><a href='#'>LinkedIn</a></li>
        <li><a href='#'>Telegram</a></li>
      </ul>
    </div>
  );
}
