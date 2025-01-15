import { useEffect } from 'react'
import { API_OPTIONS, NOW_PLAYING_MOVIES } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';

const useGetNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
    const result = await fetch(NOW_PLAYING_MOVIES, API_OPTIONS);
    const moviesNowPlaying = await result.json();

    if(!moviesNowPlaying) return;

    dispatch(addNowPlayingMovies(moviesNowPlaying.results));
  }

  useEffect(()=>{
    getNowPlayingMovies();
  },[])
}

export default useGetNowPlayingMovies