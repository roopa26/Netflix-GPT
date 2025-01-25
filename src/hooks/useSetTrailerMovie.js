import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, MOVIE_VIDEOS } from "../utils/constants";
import { addMovieTrailer, addRandomNumber } from "../utils/movieSlice";
import { useEffect } from "react";
import { getRandomNumber } from "../utils/getRandonNumber";

const useSetTrailerMovie = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    const movieTrailer = useSelector(store => store.movies.movieTrailer)

    const dispatch = useDispatch();
    const getAMovieFromNowPlaying = async () => {
        if(movies){
         const randonArrayNumber = getRandomNumber(movies.length);
         dispatch(addRandomNumber(randonArrayNumber));
         const movieUrl = MOVIE_VIDEOS.replace('{movie_id}',movies[randonArrayNumber].id)
         const result = await fetch(`${movieUrl}`, API_OPTIONS);
         const movie = await result.json();
         if(!movie) return;
      
         const filteredData = movie.results.filter(x => x.type === 'Trailer')
         const trailer = filteredData?.length ? filteredData[0] : movie[0]
         dispatch(addMovieTrailer(trailer));
        }

     }

     useEffect(() => {
         !movieTrailer && getAMovieFromNowPlaying()
     }, [movies])

}

export default useSetTrailerMovie