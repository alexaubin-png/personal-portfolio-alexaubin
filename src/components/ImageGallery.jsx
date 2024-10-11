import React from 'react'
import './ImgGallery.css'
import Chatbot from './chatbot.jsx'
export default function imageGallery() {

  return ( 
    <div>
      <div className="current-project-container">
        <h1 className='current-project-text'>Current Project</h1>
        <p className='description-current-project'>Im developing a website to teach developers to code</p>
        <iframe src='' className='current-project'></iframe>
      </div>
    
      <h1 className='pastprojects'>Past Projects</h1>
    <div class='content2'>These projects  are very uniqe to me, because they have my name and my passion on them, Ive created a vast amount of projects, click a tag below to check them out</div>
    <div className="tag-container">
    <div className='CapstoneTag'>Indygo</div><br></br>
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
