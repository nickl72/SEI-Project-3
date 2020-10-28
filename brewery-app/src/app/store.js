import { configureStore } from '@reduxjs/toolkit';
import { activeBrewerySlice } from '../features/activeBrewerySlice';
import { breweryListSlice } from '../features/breweryListSlice';
import { barCrawlSlice } from "../features/barCrawlSlice";

export default configureStore({
    reducer: {
        brewery: activeBrewerySlice.reducer,
        breweryList: breweryListSlice.reducer,
        barCrawl: barCrawlSlice.reducer
    }
});