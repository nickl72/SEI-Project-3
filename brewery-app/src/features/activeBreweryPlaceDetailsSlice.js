import { createSlice } from '@reduxjs/toolkit';

export const activeBreweryPlaceDetailsSlice = createSlice({
    name: 'activeBreweryPlaceDetails',
    initialState: {
        placeDetails: {place_id: null},
        breweryId: ''
    },
    reducers: {
        setPlaceDetails: (state, action) => {
            state.placeDetails = action.payload;
        },
        setBreweryId: (state, action) => {
            state.breweryId = action.payload;
        },
        forgetPlaceDetails: state => {
            state.placeDetails = {place_id: null};
            state.breweryId = '';

        }
    }
});

export const { setPlaceDetails, setBreweryId, forgetPlaceDetails } = activeBreweryPlaceDetailsSlice.actions;

export const selectPlaceDetails = state => state.placeDetails.placeDetails;
export const selectBreweryId = state => state.placeDetails.breweryId;


export default activeBreweryPlaceDetailsSlice.reducer;