import React from 'react';
import SocialNavigation3 from './SocialNavigation.css';
export default function SocialNavigation() {
  return (
    //make these display as a row in their own divs to avoid shaking
   <>
     {/* <label className='Navigation-Socials-Label'>Follow My Socials</label> */}
     <div className='Parent-Social-Container'>
     <a href='#'><img className='instagram' src='src\assets\IMG_1594.PNG' alt='my instagram' /></a> 
     <a href='#'> <img className='linked-in' src='src\assets\IMG_1595.PNG' alt='my instagram' /></a> 
     <a href='#'><img className='X' src='src\assets\IMG_1596.PNG' alt='my instagram' /></a>
     </div>
   
   <h1>All GITHUB PROJECTS</h1>
   <ul>
<li>Jeopardy pt1</li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
   </ul>
   </>
    
  );
}
