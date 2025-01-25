import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../utils/userSlice';
import movieReducer from '../utils/movieSlice';
import gptSearchReducer from  './gptSearchSlice';
import appConfigReducer from './appConfigSlice';
import searchReducer from './searchSlice'

export const appStore = configureStore({
    reducer :{
        userReducer,
        movies: movieReducer,
        gptSearch: gptSearchReducer,
        appConfig: appConfigReducer,
        searchList: searchReducer
    }
});