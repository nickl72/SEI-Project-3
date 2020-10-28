import { createSlice } from '@reduxjs/toolkit';

export const barCrawlSlice = createSlice({
    name: "barCrawl",
    initialState: {
        crawlList:[]
    },
    reducers: {
        addBrewery: (state, action) => {
            state.crawlList.push(action.payload) 
        },
        removeBrewery: (state, action) => {
            state.crawlList = state.crawlList.filter(item => item.id !== action.payload.id)
        }
    }
})

export const { addBrewery, removeBrewery } = barCrawlSlice.actions;

export const barCrawl = state => state.barCrawl.crawlList;

export default barCrawlSlice.reducer;