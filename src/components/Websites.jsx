import React from 'react'
import {Link} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Websites.css'
export default function Websites() {
  return (
    //a mobile friendly(full screen highresolution clickable images)
    // that link to deployed projects(projects listed in socail nav file)
    <>
  
    <section className='slider-container'>
    <div className="slider-images">
      <div className="slider-image">
        <img className='image1' src='./src/assets/AKMP4147.PNG' alt='1'></img>
        <h1>Capstone</h1>
        <div className="details">
        <h2>Indygo</h2>
          <p>bus stops and map navigation in Indianappolis, Marion County. The website is primarily for users to clean buststop in effect bettering the community</p>
  
        </div>
      </div>
      <div  className="slider-image">
        <img  className='image2' src='./src/assets/AKMP4147.PNG' alt='2'></img>
        <h1>DevZone</h1>
        <div className="details">
        <h2>Personal</h2>
          <p>a website to teach motivated students how to code, still in development and has yet be deployed</p>
  
        </div>
      </div>
      <div className="slider-image">
        <img   className='image3'src='./src/assets/AKMP4147.PNG' alt='3'></img>
        <h1>Clothing Buisness</h1>
        <div className="details">
        <h2>professional</h2>
          <p>A website tat provides users a cart to add items to, and purchase said items.</p>
  
        </div>
      </div>
      <div className="slider-image">
        <img  className='image4' src='./src/assets/AKMP4147.PNG' alt='4'></img>
        <h1>FreeLancing</h1>
        <div className="details">
        <h2>Personal</h2>
          <p>A website that allows you request a website made by me</p>
  
        </div>
      </div>
      <div className="slider-image">
        <img  className='image5' src='./src/assets/AKMP4147.PNG' alt='5'></img>
        <h1>NA</h1>
        <div className="details">
          <h2>NA</h2>
          <p>nothing yet, stay tuned for more content, im motivated as ever</p>
        </div>
      </div>
    </div>
    </section>
     </>
   
    
  )
}

