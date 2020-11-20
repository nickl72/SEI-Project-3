import { createSlice } from '@reduxjs/toolkit';

export const breweryListSlice = createSlice({
    name: 'breweryList',
    initialState: {
        breweryList: []
    },
    reducers: {
        loadResults: (state, action) => {
            state.breweryList = action.payload
        },
        addResults: (state, action) => {
            const list = state.breweryList;
            list.push(action.payload);
            state.breweryList = list;
        }
    }
});

export const { loadResults, addResults } = breweryListSlice.actions;

export const selectBreweryList = state => state.breweryList.breweryList;


export default breweryListSlice.reducer;