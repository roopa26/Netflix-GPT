import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../SecondaryContainer/MovieCard'

const SearchList = () => {
 const movies = useSelector(store => store.movies.searchedMoviesList)

 if(!movies)
   return (<div>
      <h1>Movie not found</h1>
   </div>)

  return (
    // <div className=' bg-black bg-opacity-60'>
    //     <MoviesListContainer title={"Search Results"} moviesData={selector}/>
    // </div>
    <div className='flex h-full w-auto flex-wrap p-4 m-4'>
    {movies?.map((movie) => (movie.poster_path != null) && (
       <div key={movie.id} className='mr-4 h-[270px] w-[180px] mb-5'>
        <MovieCard posterPath = {movie.poster_path || movie.profile_path}/>
       </div>)
    )}
 </div>
  )
}

export default SearchList