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
        }
    }
});

export const { addShowGpt } = gptSearch.actions;
export default gptSearch.reducer;