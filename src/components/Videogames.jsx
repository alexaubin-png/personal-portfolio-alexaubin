import React from 'react'
import './Videogames.css'
import Background from '../assets/auth background.avif'
// import JeopardyBackground1 '../assets/'
export default function Videogames() {
  return (

 <div className="slider-image-videogames">
        <img  className='image4' src={Background} alt='Jeopardy-Game'></img>
        
        <h1>Jeopardy</h1>
        <div className="container">
          <ol>
            <li>open the media fire link, and download the folder name'Jeopardy'</li>
            <li>open a second folder within in the Jeopardy folder, named'Jeopardy-Public'</li>
            <li>Then specefically open the file named'Landing.html' and immediatley start playing</li>
          </ol>
        </div>
     

    <div className="details-videogames">
        <h2>School</h2>
          <p>A Downloadable video game, I created in school</p>
          <a href="https://www.mediafire.com/folder/d74mkxpsaonsu/Jeopardy" download=''>
          <button className='button-download'>Download Here</button> </a>
        </div>
    </div>
  )
}
