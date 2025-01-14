import Header from './Header'
import TrailerContainer from './TrailerContainer'
import useGetNowPlayingMovies from '../hooks/useGetNowPlayingMovies'
import useSetTrailerMovie from '../hooks/useSetTrailerMovie';

const Browse = () => {

  useGetNowPlayingMovies();
  useSetTrailerMovie();

  return (
    <div className='w-screen h-screen'>
      <Header/>
      <TrailerContainer/>
    </div>
  )
}

export default Browse