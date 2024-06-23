import React from 'react'
import video from '../videos/videoprincipal.mp4'

export const VideoBaner = () => {
  return (
    <div className="video-background">
        <video autoPlay loop muted className='video-background video-fluid'>
            <source src={video} type="video/mp4"/>

        </video>
    </div>
  )
}
