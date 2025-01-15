import { useEffect } from 'react'
import { API_OPTIONS, POPULAR_MOVIES } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';

const useGetPopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
    const result = await fetch(POPULAR_MOVIES, API_OPTIONS);
    const moviesNowPlaying = await result.json();

    if(!moviesNowPlaying) return;

    dispatch(addPopularMovies(moviesNowPlaying.results));
  }

  useEffect(()=>{
    getPopularMovies();
  },[])
}

export default useGetPopularMovies