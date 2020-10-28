import { createSlice } from '@reduxjs/toolkit';

export const showSearchFormSlice = createSlice({
    name: "showSearchForm",
    initialState: {
        showSearch: false
    },
    reducers: {
        showSearch: state => {
            console.log('showsearchSLIceeeeee');
            state.showSearch = true;
        },
        hideSearch: state => {
            state.showSearch = false;
        }
    }
})

export const { showSearch, hideSearch } = showSearchFormSlice.actions;

export const selectShowSearch = state => state.showSearchForm.showSearch;

export default showSearchFormSlice.reducer;
