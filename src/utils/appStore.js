import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../utils/userSlice';

export const appStore = configureStore({
    reducer :{
        userReducer
    }
});