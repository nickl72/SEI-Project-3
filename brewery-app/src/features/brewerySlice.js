import { createSlice } from '@reduxjs/toolkit';

export const brewerySlice = createSlice({
    name: 'brewery',
    initialState: {
        activeBrewery: null
    },
    reducers: {
        activateBrewery: (state, brewery) => {
            state.activeBrewery = brewery;
        }
    }
});

export const { activateBrewery } = brewerySlice.actions;

export default brewerySlice.reducer;