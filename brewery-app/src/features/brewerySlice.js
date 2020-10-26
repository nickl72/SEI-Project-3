import { createSlice } from '@reduxjs/toolkit';

export const brewerySlice = createSlice({
    name: 'brewery',
    initialState: {
        breweryList: [],
        activeBrewery: {id: null}
    },
    reducers: {
        activateBrewery: (state, action) => {
            state.activeBrewery = action.payload;
        },
        deactivateBrewery: state => {
            state.activeBrewery = {id: null}
        },
        loadResults: (state, action) => {
            state.breweryList = action.payload
        }
    }
});

export const { activateBrewery, deactivateBrewery, loadResults } = brewerySlice.actions;

export const selectBrewery = state => state.brewery.activeBrewery;
export const selectBreweryList = state => state.brewery.breweryList;

export default brewerySlice.reducer;