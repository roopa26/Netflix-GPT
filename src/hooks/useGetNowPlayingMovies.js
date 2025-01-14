import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';

const useGetNowPlayingMovies = (setNowPlayingMovie) => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
    const result = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", API_OPTIONS);
    const moviesNowPlaying = await result.json();

    if(!moviesNowPlaying) return;

    dispatch(addNowPlayingMovies(moviesNowPlaying.results));
  }

  useEffect(()=>{
    getNowPlayingMovies();
  },[])
}

export default useGetNowPlayingMovies