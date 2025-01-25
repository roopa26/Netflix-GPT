import React, { useEffect, useRef, useState } from 'react'
import MovieCard from '../SecondaryContainer/MovieCard'
import { useParams } from 'react-router-dom'
import Header from '../Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faCircleQuestion, faHeart, faList, faPlay } from '@fortawesome/free-solid-svg-icons'
import { API_OPTIONS, MOVIE_DETAILS, MOVIE_VIDEOS } from '../../utils/constants'

const MovieDetailsComponent = () => {
    const{id} = useParams();
    const [movie, setMovie] = useState([]);
    const [isPlay, setIsPlay] = useState(false);
    const ref = useRef('');

    const genres = movie?.genres?.map(genre => genre.name).join(',')
     
    const handlePlayBtn = () => {
        setIsPlay(!isPlay)
    }

    const fetchMovie = async () => {
        const movieUrl = MOVIE_DETAILS.replace('id',id)
        const response = await fetch(`${movieUrl}`, API_OPTIONS);
        const movieData = await response.json();
        setMovie(movieData)
        fetchMovieVideo();
    }

    const fetchMovieVideo = async () => {
        const movieUrl = MOVIE_VIDEOS.replace('{movie_id}',id)
        const response = await fetch(`${movieUrl}`,API_OPTIONS);
        const movieData = await response.json();
        const filteredData = movieData.results.filter(x => x.type === 'Trailer')

        const trailer = filteredData?.length ? filteredData[0] : movie[0]
        ref.current = `https://www.youtube.com/embed/${trailer?.key}?autoplay=1&controls=1&loop=1&playlist=${trailer?.key}`
    }

    useEffect(() => {
        fetchMovie();
    },[])

  return (
    <div className='text-white h-auto bg-black flex w-full flex-wrap'>
        <Header/>
        <div className='mt-24 p-10 items-center flex bg-black ml-16 botder-2 border-t-white relative flex-wrap'>
            <MovieCard posterPath = {movie.poster_path} isDetailPage={true}/>
            <div className='ml-2 md:mt-6 md:ml-2 md:w-[80%] lg:w-[50%] lg:-mt-6 lg:ml-14'>
                <h1 className='font-bold text-4xl'>{movie.title}</h1>
                <p className='text-base font-normal pt-4'>{movie.release_date}.{genres}</p>
                <div className='flex items-center mt-4 flex-wrap sm:flex-nowrap'>
                    <div className='flex items-center justify-center w-22'>
                        <div className='mr-2 font-extrabold rounded-full border-4 border-teal-600 w-20 h-20 text-center'>
                            <p className='mt-6'>{movie.vote_average*10}% </p>
                        </div>
                        <p className='w-8 font-bold'>User Score</p>
                    </div>
                    
                    <div className='flex items-center mx-4'>
                        <ul className='flex w-4 mr-10'>
                            <li className='hover:scale-150 ease-out duration-100 cursor-pointer'>😍</li>
                            <li className='hover:scale-150 ease-out duration-100 cursor-pointer'>😦</li>
                            <li className='hover:scale-150 ease-out duration-100 cursor-pointer'>🤯</li>
                        </ul>
    
                        <div className='cursor-pointer bg-slate-800 font-bold m-4 mx-4 p-2 px-4 rounded-full'>Whats your vibe? <FontAwesomeIcon icon={faCircleQuestion} /></div>
                    </div>
                </div>
                <div className='md:mt-4 md:flex md:items-center flex-wrap sm:flex-nowrap'>
                    <button className='bg-slate-800 font-bold m-2 w-12 h-12 p-4 rounded-full '><FontAwesomeIcon className='mb-2' icon={faList} /></button>
                    <button className='bg-slate-800 font-bold m-2 w-12 h-12 p-4 rounded-full'><FontAwesomeIcon className='mb-2' icon={faHeart} /></button>
                    <button className='bg-slate-800 font-bold m-2 w-12 h-12 p-4 rounded-full'><FontAwesomeIcon className='mb-2' icon={faBookmark} /></button>
                    <button className='ml-8 text-center font-bold' onClick={handlePlayBtn}><FontAwesomeIcon className='mr-2' icon={faPlay} />Play Trailer</button>
                </div>
                <h2 className='mt-4 font-semibold text-xl'>Overview</h2>
                <p className='pt-4 w-[90%] font-normal'>{movie.overview}</p>
            </div>
        </div>
        {isPlay && (
            <div className='absolute w-screen h-screen'>
                   <iframe
                   className="w-[60%] object-contain h-96 mx-auto mt-40"
                   src={ref.current}
                   title="YouTube video player"
                   frameBorder="0"
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                   referrerPolicy="strict-origin-when-cross-origin"
                   allowFullScreen></iframe>
                   <span onClick={()=>setIsPlay(false)} className='absolute text-3xl font-bold md:right-[10rem] top-36 right-[7rem] sm:right-[8rem] lg:right-[15rem] cursor-pointer bg-black w-10 rounded-full text-center'>X</span>
            </div>
        )}

    </div>
  )
}

export default MovieDetailsComponent