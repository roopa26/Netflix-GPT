import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getRandomNumber } from '../utils/getRandonNumber';
import { API_OPTIONS } from '../utils/constants';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const TrailerContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    const randomNumber = useSelector((store) => store.movies?.randomNumberSelected)

    if(!movies) return;

    
    const movie = movies[randomNumber];
    const {title, overview} = movie;

  return (
    <div className='w-screen h-screen'>
        <div className='h-full'>
            <VideoBackground/>
        </div>
        <div className='absolute top-48 w-[30%]'>
            <VideoTitle title={title} overview={overview}/>
        </div>
    </div>

  )
}

export default TrailerContainer