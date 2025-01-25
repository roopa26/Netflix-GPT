import Header from './Header'
import TrailerContainer from './MainContainer/TrailerContainer'
import useGetNowPlayingMovies from '../hooks/useGetNowPlayingMovies'
import ContainerForMoviesList from './SecondaryContainer/ContainerForMoviesList';
import useGetPopularMovies from '../hooks/useGetPopularMovies';
import useGetTopRatedMovies from '../hooks/useGetTopRatedMovies';
import useGetUpcomingMovies from '../hooks/useGetUpcomingMovies';
import { useDispatch, useSelector } from 'react-redux';
import SearchComponent from './SearchPage/SearchComponent';                     
import { useEffect } from 'react';
import { addShowGpt, removeSearchScreen } from '../utils/gptSearchSlice';

const Browse = () => {
  const showGptSearch = useSelector(store => store.gptSearch.showGptSearch)
  const dispatch = useDispatch();

  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetTopRatedMovies();
  useGetUpcomingMovies();

  useEffect(()=>{
      return () => {
        dispatch(removeSearchScreen());
      }
  },[])
  return (
    <div className='w-screen h-screen'>
      <Header/>
      {showGptSearch ? (<SearchComponent/>):(
        <>
          <TrailerContainer/>     
          <ContainerForMoviesList/> 
        </>
      )}
    </div>
  )
}

export default Browse