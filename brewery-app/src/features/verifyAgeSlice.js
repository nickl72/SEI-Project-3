import { createSlice } from '@reduxjs/toolkit';

export const verifyAgeSlice = createSlice({
    name: "verifyAge",
    initialState: {
        ofAge: true // null
    },
    reducers: {
        oldEnough: state => {
            state.ofAge = true;
        },
        tooYoung: state => {
            state.ofAge = false;
        }
    }
})

export const { oldEnough, tooYoung } = verifyAgeSlice.actions;

export const selectVerifyAge = state => state.verifyAge.ofAge;

export default verifyAgeSlice.reducer;
