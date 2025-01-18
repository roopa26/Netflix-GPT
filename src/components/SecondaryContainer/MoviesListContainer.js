import React from 'react'
import MovieCard from './MovieCard'

const MoviesListContainer = ({title, moviesData}) => {
  return (
    <div className='px-8 py-4 mb-2 text-white relative w-[100%]'>
      <div className='relative z-10'>
      <h1 className='text-2xl font-medium py-4'>{title}</h1>
      <div className='flex h-full w-auto overflow-x-auto scrollbar-hide'>
         {moviesData?.map((movie) => 
            <div key={movie.id} className='mr-4 h-[270px] w-[180px]'>
             <MovieCard posterPath = {movie.poster_path}/>
            </div>
         )}
      </div>
      </div>
    </div>
  )
}

export default MoviesListContainer