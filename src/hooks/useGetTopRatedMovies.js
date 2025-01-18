import { useEffect } from 'react'
import { API_OPTIONS, TOP_RATED_MOVIES,  } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addTopRatedMovies } from '../utils/movieSlice';

const useGetTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(store => store.movies.topRatedMovies)

    const getTopRatedMovies = async () => {
    const result = await fetch(TOP_RATED_MOVIES, API_OPTIONS);
    const moviesNowPlaying = await result.json();

    if(!moviesNowPlaying) return;

    dispatch(addTopRatedMovies(moviesNowPlaying.results));
  }

  useEffect(()=>{
    !topRatedMovies && getTopRatedMovies();
  },[])
}

export default useGetTopRatedMovies