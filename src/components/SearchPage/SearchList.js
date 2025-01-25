import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchMovieDetails from './SearchMovieDetails';
import { Link } from 'react-router-dom';
import { addSearchMovies } from '../../utils/movieSlice'

const SearchList = () => {
  const dispatch = useDispatch();
 const movies = useSelector(store => store.movies.searchedMoviesList)

 useEffect(()=>{
    return() => {
      dispatch(addSearchMovies([]))
    }
 },[])


 if(!movies)
   return (<div className='text-white text-center mt-28 bg-black h-28 bg-opacity-70'>
      <h1 className='text-3xl font-bold mt-8 px-2'>🔍 Oops! Movie not found</h1>
   </div>)

  return (
    // <div className=' bg-black bg-opacity-60'>
    //     <MoviesListContainer title={"Search Results"} moviesData={selector}/>
    // </div>
    <div className='h-full w-[65%] shadow-md p-4 m-4'>
    {movies?.map((movie) => (<div key={movie.id} className='bg-orange-100 bg-opacity-90 rounded-lg mb-8 border-2 shadow-orange-300 border-l-orange-500 border-t-orange-500'>
      <Link key={movie.id} to={`/movie/${movie.id}/${movie.title}`}>
          <SearchMovieDetails movieData={movie}/>
      </Link>
      </div>)
    )}
 </div>
  )
}

export default SearchList