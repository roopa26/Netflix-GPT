import { useEffect } from 'react'
import { API_OPTIONS, UPCOMING_MOVIES,  } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addUpcomingMovies } from '../utils/movieSlice';

const useGetUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upComingMovies = useSelector(store => store.movies.upcomingMovies)
    const getUpcomingMovies = async () => {
    const result = await fetch(UPCOMING_MOVIES, API_OPTIONS);
    const moviesNowPlaying = await result.json();

    if(!moviesNowPlaying) return;

    dispatch(addUpcomingMovies(moviesNowPlaying.results));
  }

  useEffect(()=>{
    upComingMovies && getUpcomingMovies();
  },[])
}

export default useGetUpcomingMovies