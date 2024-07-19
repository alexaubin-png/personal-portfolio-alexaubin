import React from 'react'
import {Router } from 'react-router-dom'
import './Home.css'
import HomeFlexBox from '../components/HomeFlexBox';
// import { useLocation } from 'react-router-dom'

// const HomeFlexBox = () => {
// const location = useLocation()

// if(location.pathname === '/'){
// return(
//   <div>
//     {<HomeFlexBox />}
//   </div>
// )
// }else{
//   return null;
//  }
// };
export default function Home() {
  return (
<>
  <div >
  {/* <img className='backgroundImage' src='src\assets\XGWC2016.PNG'></img> */}
   
  <div class='text-overlay'>Hello, im Alex Aubin Im intensively pursuing my <strong>software development certificate</strong> at, Upright Education</div>
  </div>
  <div className="inspirational-paragraph">
Ive recently finished my program, and with the skills I learned at BCA Im happy to announce I will be developing software as a passion.
If you have an idea for a software application, but arent quite sure how to make it work come to me and Ill be your best solution.
Theirs an art to making full stack web applications, additonally a variety of qualification/skills implemented to achieve a succesfull project
  </div>
  <HomeFlexBox/>
<div  className="typing-animation">
  im excited to work on other projects
</div>
 </>
  )

}
