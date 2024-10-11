import React from 'react';

const Profile = ({ token }) => {
  // Check if token exists to determine if user is logged in


  return (
    <>

        <div className="double-container">
          <div className='profile-container'>
            <img src='' className='profile-picture' alt='Profile' />
            <h1 className='my-name-profile'>Alex Aubin</h1>
            {/* <label href='' className='profile-Education'>Certificate</label> */}
            {/* <a className='profile-badges' href='https://gyazo.com/4118a7b8c93a4b3173ccd6549e8802ba'>badges</a><br></br> */}
            <a className='profile-certificate' href='https://gyazo.com/fba38f035969bc4cb8049b775c7da68f'>Certificate</a>
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
        </div>
        </>
  );
};

export default Profile;
