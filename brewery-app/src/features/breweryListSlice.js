import { createSlice } from '@reduxjs/toolkit';

export const breweryListSlice = createSlice({
    name: 'breweryList',
    initialState: {
        breweryList: []
    },
    reducers: {
        loadResults: (state, action) => {
            state.breweryList = action.payload
        }
    }
});

export const { loadResults } = breweryListSlice.actions;

export const selectBreweryList = state => state.breweryList.breweryList;


export default breweryListSlice.reducer;