import React from 'react'
import './Hobbies.css'
import fitnessDumbellImage from '/src/assets/hobbies4.jpg'
export default function Hobbies() {
  return (
    <div className='Hobbies-Container'>
        <ul className='Hobbies-UL'>
            <img src='https://i.gyazo.com/26d2faaf9b71a6704fc48c539f458768.png' className='Coding'></img>
          <li className='Coding-Header'>Coding</li>
    <label className='Coding-Text'>I often get asked, hey Alex how many coding languages do you know and my response is about 3-4. Additonally I tell them that I set aside about 20 hours a week of my own time code, because with desire dedication and discilpline you can acheive anything.</label>
          <img  src='https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546348648l/43430483._SX318_.jpg' className='Reading'></img>
          <li className='Reading-Header'>Reading</li>
          <label className='Reading-Text'>Ive never been the best at reading like most young adults with ADHD, Although back when I was travelnig to main I bought a copy of Java Script for dummies. Im definetly more immersed into computers and phones when reading is deemed rellevant, But I hear its healthy to practice reading so I took it up as hobbie.</label>
          <img src='' className='Cooking'></img>
          <li>Cooking is a hobby that grew on me and I realized how important of a skill it is to take care my loved ones. Also once I started working out daily, I prepped meals that I cooked, along with proper workout plans and consistency I acomplished alot. primarly my family taught me how to cook, and or showed me someone to watch to learn cooking skills.</li>
          <img src={fitnessDumbellImage} className='Fitness'></img>
          <li>At a point in my life I took fitness seriously enough to start purchasing equipment, and I acomplished alot with desire, dedication, and dicipline.</li>
        </ul>
    </div>
  )
}
