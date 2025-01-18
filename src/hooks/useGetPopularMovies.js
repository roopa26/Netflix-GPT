import { useEffect } from 'react'
import { API_OPTIONS, POPULAR_MOVIES } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';

const useGetPopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(store => store.movies.popularMovies)

    const getPopularMovies = async () => {
    const result = await fetch(POPULAR_MOVIES, API_OPTIONS);
    const moviesNowPlaying = await result.json();

    if(!moviesNowPlaying) return;

    dispatch(addPopularMovies(moviesNowPlaying.results));
  }

  useEffect(()=>{
    !popularMovies && getPopularMovies();
  },[])
}

export default useGetPopularMovies