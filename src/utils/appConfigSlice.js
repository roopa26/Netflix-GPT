import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const appConfigSlice = createSlice({
    name: "App Config",
    initialState:{
        language: "en",
        languageFile: null
    },
    reducers:{
        updateLanguageSelected: (state, action) => {
            state.language = action.payload
        },
        uploadLanguageFile:(state, action) =>{
            state.languageFile = action.payload
        }
    }
});

export const {updateLanguageSelected, uploadLanguageFile} = appConfigSlice.actions;
export default appConfigSlice.reducer;