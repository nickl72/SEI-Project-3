import { createSlice } from '@reduxjs/toolkit';

export const barCrawlSlice = createSlice({
    name: "barCrawl",
    initialState: {
        crawlList:[],
        view: "results"
    },
    reducers: {
        addBrewery: (state, action) => {
            state.crawlList.push(action.payload) 
        },
        removeBrewery: (state, action) => {
            state.crawlList = state.crawlList.filter(item => item.id !== action.payload.id)
        }, 
        setView: (state, action) => {
            console.log(action);
            state.view = action.payload;
        }
    }
})

export const { addBrewery, removeBrewery, setView } = barCrawlSlice.actions;

export const barCrawl = state => state.barCrawl.crawlList;
export const view = state => state.barCrawl.view;

export default barCrawlSlice.reducer;