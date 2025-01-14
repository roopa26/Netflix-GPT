import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../utils/userSlice';
import movieReducer from '../utils/movieSlice';

export const appStore = configureStore({
    reducer :{
        userReducer,
        movies: movieReducer
    }
});