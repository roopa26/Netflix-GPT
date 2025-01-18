import Header from './Header'
import TrailerContainer from './MainContainer/TrailerContainer'
import useGetNowPlayingMovies from '../hooks/useGetNowPlayingMovies'
import useSetTrailerMovie from '../hooks/useSetTrailerMovie';
import ContainerForMoviesList from './SecondaryContainer/ContainerForMoviesList';
import useGetPopularMovies from '../hooks/useGetPopularMovies';
import useGetTopRatedMovies from '../hooks/useGetTopRatedMovies';
import useGetUpcomingMovies from '../hooks/useGetUpcomingMovies';
import { useSelector } from 'react-redux';
import SearchComponent from './SearchPage/SearchComponent';


const Browse = () => {
  const showGptSearch = useSelector(store => store.gptSearch.showGptSearch)

  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetTopRatedMovies();
  useGetUpcomingMovies();
  useSetTrailerMovie();

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