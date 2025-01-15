import { createSlice } from "@reduxjs/toolkit";
import { getRandomNumber } from "./getRandonNumber";

const movieSlice = createSlice({
    name: "Movie",
    initialState:{
        nowPlayingMovies: null,
        movieTrailer: null,
        randomNumberSelected: 0,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null
    },

    reducers:{
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addMovieTrailer: (state, action) => {
            state.movieTrailer = action.payload
        },
        addRandomNumber: (state, action) => {
            state.randomNumberSelected = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload
        }
    }
});

export const {addNowPlayingMovies, addMovieTrailer, addRandomNumber, addPopularMovies, addTopRatedMovies, addUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer