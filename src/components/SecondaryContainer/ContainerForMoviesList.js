import React from 'react'
import MoviesListContainer from './MoviesListContainer'
import { useSelector } from 'react-redux';

const ContainerForMoviesList = () => {
  const movies = useSelector((store) => store.movies)

  return (
    <div className='bg-black'>
    <div className='relative -mt-44 z-10'>
      <MoviesListContainer title={"Now Playing Movies"} moviesData = {movies.nowPlayingMovies}/>
      <MoviesListContainer title={"Popular Movies"} moviesData = {movies.popularMovies}/>
      <MoviesListContainer title={"Top Rated Movies"} moviesData = {movies.topRatedMovies}/>
      <MoviesListContainer title={"Upcoming Movies"} moviesData = {movies.upcomingMovies}/>
    </div>
  </div>
  )
}

export default ContainerForMoviesList