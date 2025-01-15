import Header from './Header'
import TrailerContainer from './MainContainer/TrailerContainer'
import useGetNowPlayingMovies from '../hooks/useGetNowPlayingMovies'
import useSetTrailerMovie from '../hooks/useSetTrailerMovie';
import ContainerForMoviesList from './SecondaryContainer/ContainerForMoviesList';
import MoviesListContainer from './SecondaryContainer/MoviesListContainer';
import useGetPopularMovies from '../hooks/useGetPopularMovies';
import useGetTopRatedMovies from '../hooks/useGetTopRatedMovies';
import useGetUpcomingMovies from '../hooks/useGetUpcomingMovies';


const Browse = () => {

  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetTopRatedMovies();
  useGetUpcomingMovies();
  useSetTrailerMovie();

  return (
    <div className='w-screen h-screen'>
      <Header/>
      <TrailerContainer/>     
      <ContainerForMoviesList/> 
    </div>
  )
}

export default Browse