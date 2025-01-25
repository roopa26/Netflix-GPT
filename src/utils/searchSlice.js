import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "SearchResult",
    initialState: {
        searchMaxStorage: 30,
        searchResult: {}
    },
    reducers:{
        addSearchResult: (state, action) => {
            state.searchResult = Object.assign(state.searchResult, action.payload)

            const keys = Object.keys(state.searchResult)
            if(keys.length > state.searchMaxStorage){
                delete state.searchResult[keys[0]]
            }
        }
    }
});

export const {addSearchResult} = searchSlice.actions;
export default searchSlice.reducer;