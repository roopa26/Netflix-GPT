import React, { useState } from 'react'
import useSetTrailerMovie from '../../hooks/useSetTrailerMovie';

const VideoBackground = () => {

    const [url, setUrl] = useState(null);
    
    useSetTrailerMovie(setUrl)

  return (
    <div className='w-full h-full'>
         <iframe
      className="w-full object-contain h-full"
      src={url}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
    </div>
  )
}

export default VideoBackground