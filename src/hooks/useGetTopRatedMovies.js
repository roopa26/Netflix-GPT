import { useEffect } from 'react'
import { API_OPTIONS, TOP_RATED_MOVIES,  } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/movieSlice';

const useGetTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
    const result = await fetch(TOP_RATED_MOVIES, API_OPTIONS);
    const moviesNowPlaying = await result.json();

    if(!moviesNowPlaying) return;

    dispatch(addTopRatedMovies(moviesNowPlaying.results));
  }

  useEffect(()=>{
    getTopRatedMovies();
  },[])
}

export default useGetTopRatedMovies