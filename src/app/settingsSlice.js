import { createSlice } from '@reduxjs/toolkit';

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        date: '',
        time: '',
        service: '',
        location: true,
        celebrants: []
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
        changeLocation: (state, action) => {
            state.location = !state.location;
        },
        addCelebrant: (state, action) => {
            const id = state.celebrant.length + 1;
            const person = action.payload;
            const celebrant = {
                id: id,
                name: person
            };
            state.celebrants.push(celebrant);
        },
        removeCelebrant: (state, action) => {
            const { id, person } = action.payload;
            state.celebrants = state.celebrants.filter(celebrant => celebrant.id !== id);
        }
    }
});

export const { changeDate, changeTime, changeServiceName, changeLocation, addCelebrant, removeCelebrant } = settingsSlice.actions;