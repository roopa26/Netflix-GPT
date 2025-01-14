import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer, addRandomNumber } from "../utils/movieSlice";
import { useEffect } from "react";
import { getRandomNumber } from "../utils/getRandonNumber";

const useSetTrailerMovie = (setUrl) => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    const dispatch = useDispatch();
    const getAMovieFromNowPlaying = async () => {
        if(movies){
         const randonArrayNumber = getRandomNumber(movies.length);
         dispatch(addRandomNumber(randonArrayNumber));
         const result = await fetch(`https://api.themoviedb.org/3/movie/${movies[randonArrayNumber].id}/videos`, API_OPTIONS);
         const movie = await result.json();
         if(!movie) return;
      
         const filteredData = movie.results.filter(x => x.type === 'Trailer')
         const trailer = filteredData?.length ? filteredData[0] : movie[0]
         dispatch(addMovieTrailer(trailer));
         setUrl(`https://www.youtube.com/embed/${trailer.key}?si=RB9YsTNddKn38qeF&autoplay=1&controls=1&mute=1`);
        }

     }

     useEffect(() => {
         getAMovieFromNowPlaying()
     }, [])

}

export default useSetTrailerMovie