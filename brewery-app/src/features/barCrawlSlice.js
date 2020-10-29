import { createSlice } from '@reduxjs/toolkit';

export const barCrawlSlice = createSlice({
    name: "barCrawl",
    initialState: {
        crawlList:[],
        view: "results",
        email: false
    },
    reducers: {
        addBrewery: (state, action) => {
            state.crawlList.push(action.payload) 
        },
        removeBrewery: (state, action) => {
            state.crawlList = state.crawlList.filter(item => item.id !== action.payload.id)
        }, 
        setView: (state, action) => {
            state.view = action.payload;
        },
        toggleEmail: state => {
            state.email = !state.email;
        }
    }
})

export const { addBrewery, removeBrewery, setView, toggleEmail } = barCrawlSlice.actions;

export const barCrawl = state => state.barCrawl.crawlList;
export const view = state => state.barCrawl.view;
export const selectEmail = state => state.barCrawl.email;

export default barCrawlSlice.reducer;