import React from 'react'
import DownloadCSS from './Download.css'
import MyResume from '../assets/Alex_Aubin_Resume.pdf'
export default function Download() {
    const DownloadButton = () => {
        console.log('Download Button clicked!')

    }

  return (
<div>
    <a download='../assets/Alex_Aubin_Resume.pdf' className="call-to-action">
        <button onClick={DownloadButton}>Download</button>
  </a>
</div>
  )
}
