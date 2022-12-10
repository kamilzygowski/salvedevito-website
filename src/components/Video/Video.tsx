import React from 'react'
import './Video.scss'
import videoSrc from '../../assets/dashboard.webm'

const Video = () => {
  return (
    <div className='Video'>
        <video src={videoSrc} loop={true} autoPlay muted/>
    </div>
  )
}

export default Video