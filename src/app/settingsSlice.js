import { createSlice } from '@reduxjs/toolkit';

const date = new Date().toDateString();

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        date: date,
        time: '',
        service: '',
        location: true,
        celebrants: ['Revd Nick Wells',]
    },
    reducers: {
        changeDate: (state, action) => {
            state.date = action.payload;
        },
        changeTime: (state, action) => {
            state.time = action.payload;
        },
        changeServiceName: (state, action) => {
            state.service = action.payload;
        },
        changeLocation: (state) => {
            state.location = !state.location;
        },
        addCelebrant: (state, action) => {
            const person = action.payload;
            state.celebrants.push(person);
        },
        removeCelebrant: (state, action) => {
            const person = action.payload;
            state.celebrants = state.celebrants.filter(celebrant => celebrant !== person);
        },
    }
});

export const { changeDate, changeTime, changeServiceName, changeLocation, addCelebrant, removeCelebrant } = settingsSlice.actions;
export const selectSettings = (state) => state.settings;
export default settingsSlice.reducer;
