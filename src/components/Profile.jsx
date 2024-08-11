import React from 'react'

export default function Profile() {
  return (
    <div  className='profile-container'>
    <img className='profile-picture'></img>
    <h1 ClassName='name'></h1>
    <h1 className='my-name-profile'>Alex Aubin</h1>
    <label className='profile-Education'>Certificate</label>
    <div className='Profile-Details'>
      <label className='email-label'>EMAIL</label>
      <p>alexjames4674@gmail.com</p>
      <label>PHONE</label>
      <p>802-557-7719</p>
      <label>BIRTHDAY</label>
      <p>01/26/2002</p>
      <label>LOCATION</label>
      <p>05452 Vermont</p>
    </div>
    

   </div>
  )
}