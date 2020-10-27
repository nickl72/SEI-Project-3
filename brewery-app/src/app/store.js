import { configureStore } from '@reduxjs/toolkit';
import { activeBrewerySlice } from '../features/activeBrewerySlice';
import { breweryListSlice } from '../features/breweryListSlice';
import { verifyAgeSlice } from '../features/verifyAgeSlice';


export default configureStore({
    reducer: {
        brewery: activeBrewerySlice.reducer,
        breweryList: breweryListSlice.reducer,
        verifyAge: verifyAgeSlice.reducer
    }
});