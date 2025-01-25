import React from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'

const MoviesListContainer = ({title, moviesData}) => {

  return (
    <div className='px-8 py-4 mb-2 text-white relative w-[100%]'>
      <div className='relative z-10'>
      <h1 className='text-2xl font-medium py-4'>{title}</h1>
      <div className='flex overflow-x-scroll scrollbar-hide'>
        <div className='flex'>
           {moviesData?.map((movie) => 
              <Link key={movie.id} to={`/movie/${movie.id}/${movie.title}`}>
                <MovieCard posterPath = {movie.poster_path}/>
              </Link>
           )}
        </div>
      </div>
      </div>
    </div>
  )
}

export default MoviesListContainer