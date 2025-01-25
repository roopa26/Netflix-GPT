import { faL } from "@fortawesome/free-solid-svg-icons";
import { createSlice } from "@reduxjs/toolkit";

const gptSearch = createSlice({
    name: "gptSearch",
    initialState:{
        showGptSearch: false
    },
    reducers: {
        addShowGpt: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        removeSearchScreen: (state, action) => {
            state.showGptSearch  = false;
        }
    }
});

export const { addShowGpt, removeSearchScreen } = gptSearch.actions;
export default gptSearch.reducer;