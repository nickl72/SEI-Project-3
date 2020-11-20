import { configureStore } from '@reduxjs/toolkit';
import { activeBreweryPlaceDetailsSlice } from '../features/activeBreweryPlaceDetailsSlice';
import { activeBrewerySlice } from '../features/activeBrewerySlice';
import { breweryListSlice } from '../features/breweryListSlice';
import { barCrawlSlice } from "../features/barCrawlSlice";
import { verifyAgeSlice } from '../features/verifyAgeSlice';
import { showSearchFormSlice } from '../features/showSearchFormSlice';


export default configureStore({
    reducer: {
        placeDetails: activeBreweryPlaceDetailsSlice.reducer,
        brewery: activeBrewerySlice.reducer,
        breweryList: breweryListSlice.reducer,
        verifyAge: verifyAgeSlice.reducer,
        showSearchForm: showSearchFormSlice.reducer,
        barCrawl: barCrawlSlice.reducer
    }
});