import { configureStore } from '@reduxjs/toolkit';
import { brewerySlice } from '../features/brewerySlice';


export default configureStore({
    reducer: {
        brewery: brewerySlice.reducer
    }
});