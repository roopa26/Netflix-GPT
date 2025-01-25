import React from 'react'
import MovieCard from '../SecondaryContainer/MovieCard'

const SearchMovieDetails = ({movieData}) => {


  return (
    <div className='flex h-44 items-center'>
        <div>
            <MovieCard posterPath = {movieData.poster_path || movieData.profile_path} isSearchPage={true}/>
        </div>
        <div className='p-4 text-black text-justify'>
            <h1 className='text-lg font-bold font-custom'>{movieData.title}</h1>
            <p className='text-gray-600 font-medium'>{movieData.release_date}</p>
            <div className='pt-2 mb-4 w-[95%] h-[4.6rem] text-base h-auto box-border text-ellipsis pb-4 line-clamp-3'>
                <p className='text-base font-custom'>{movieData.overview}</p>
            </div>
        </div>
    </div>
  )
}

export default SearchMovieDetails