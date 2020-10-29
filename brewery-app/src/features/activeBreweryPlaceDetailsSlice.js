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
        forgetPlaceDetails: state => {
            state.placeDetails = {place_id: null}
        }
    }
});

export const { setPlaceDetails, forgetPlaceDetails } = activeBreweryPlaceDetailsSlice.actions;

export const selectPlaceDetails = state => state.placeDetails.placeDetails;


export default activeBreweryPlaceDetailsSlice.reducer;