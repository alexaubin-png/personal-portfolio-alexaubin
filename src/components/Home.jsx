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
  <HomeFlexBox/>

 </>
  )

}
