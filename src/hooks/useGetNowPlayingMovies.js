import { useEffect } from 'react'
import { API_OPTIONS, NOW_PLAYING_MOVIES } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';

const useGetNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)
    const getNowPlayingMovies = async () => {
    const result = await fetch(NOW_PLAYING_MOVIES, API_OPTIONS);
    const moviesNowPlaying = await result.json();

    if(!moviesNowPlaying) return;

    dispatch(addNowPlayingMovies(moviesNowPlaying.results));
  }

  useEffect(()=>{
   !nowPlayingMovies && getNowPlayingMovies();
  },[])
}

export default useGetNowPlayingMovies