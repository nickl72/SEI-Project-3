import { createSlice } from '@reduxjs/toolkit';

export const barCrawlSlice = createSlice({
    name: "barCrawl",
    initialState: {
        crawlList:[]
    },
    reducers: {
        addBrewery: (state, action) => {
            state.crawlList.push(action.payload) 
        }
    }
})

export const { addBrewery, } = barCrawlSlice.actions;

export const barCrawl = state => state.barCrawl.crawlList;

export default barCrawlSlice.reducer;