import React from 'react'
import MoviesListContainer from './MoviesListContainer'
import { useSelector } from 'react-redux';

const ContainerForMoviesList = () => {
  const movies = useSelector((store) => store.movies)

  return (
    <div className='bg-black'>
    <div className='relative -mt-44 z-10 mr-4 overflow-hidden'>
      <MoviesListContainer key = {"now_playing"} title={"Now Playing Movies"} moviesData = {movies.nowPlayingMovies}/>
      <MoviesListContainer key = {"popular"} title={"Popular Movies"} moviesData = {movies.popularMovies}/>
      <MoviesListContainer key = {"top_rated_movies"} title={"Top Rated Movies"} moviesData = {movies.topRatedMovies}/>
      <MoviesListContainer key = {"upcoming_movies"} title={"Upcoming Movies"} moviesData = {movies.upcomingMovies}/>
    </div>
  </div>
  )
}

export default ContainerForMoviesList