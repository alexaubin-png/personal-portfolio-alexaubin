import React from 'react'
import './ImgGallery.css'
import Chatbot from './chatbot.jsx'
export default function imageGallery() {

  return ( 
    <div>
      <div className="current-project-container">
        <h1 className='current-project-text'>Current Project</h1>
        <p className='description-current-project'>Im developing a website to hold a storefront for a clothing company</p>
        <iframe src='http://localhost:3000/' className='current-project'></iframe>
      </div>
    

    <div class='content2'>These projects  are very uniqe to me, because they have my name and my passion on them, Ive created a vast amount of projects, click a tag below to check them out</div>
    <div className="tag-container">
    <h1 className='pastprojects'>Past Projects</h1>
    <a href='https://capstone-indygo-react-capstone-magic-q6li.onrender.com/'><div className='CapstoneTag'>Indygo</div></a><br></br>
      <div className='JeopardyTag'>Jeopardy</div>
      <div className='React-ChatTag'>React-Chat</div>
      <div className='DevzoneTag'>DevZone</div>
      <div className='PineappleTag'>Server-Blog</div>
      <div className="chatbot"><Chatbot/></div>
    </div>
 
 {/*deploy jeopardy, capstone, react-chat, make frontend for server-blog  and devzone*/}

  </div>

  )
}
