import { createSlice } from '@reduxjs/toolkit';

export const activeBrewerySlice = createSlice({
    name: 'activeBrewery',
    initialState: {
        activeBrewery: {id: null}
    },
    reducers: {
        activateBrewery: (state, action) => {
            state.activeBrewery = action.payload;
        },
        deactivateBrewery: state => {
            state.activeBrewery = {id: null}
        }
    }
});

export const { activateBrewery, deactivateBrewery } = activeBrewerySlice.actions;

export const selectBrewery = state => state.brewery.activeBrewery;


export default activeBrewerySlice.reducer;