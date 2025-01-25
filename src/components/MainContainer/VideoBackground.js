import React, { useEffect, useState } from 'react'
import useSetTrailerMovie from '../../hooks/useSetTrailerMovie';
import { useSelector } from 'react-redux';

const VideoBackground = () => {
    const [url, setUrl] = useState(null);
    const movieTrailer = useSelector(store => store.movies.movieTrailer)
    
    useSetTrailerMovie()

    useEffect(()=>{
      setUrl(`https://www.youtube.com/embed/${movieTrailer?.key}?autoplay=1&controls=1&mute=1&loop=1&playlist=${movieTrailer?.key}`);
    },[movieTrailer])
    
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