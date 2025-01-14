import { createSlice } from "@reduxjs/toolkit";
import { getRandomNumber } from "./getRandonNumber";

const movieSlice = createSlice({
    name: "Movie",
    initialState:{
        nowPlayingMovies: null,
        movieTrailer: null,
        randomNumberSelected: 0
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
        }
    }
});

export const {addNowPlayingMovies, addMovieTrailer, addRandomNumber} = movieSlice.actions;
export default movieSlice.reducer