import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from '../app/settingsSlice';

export const store = configureStore({
  reducer: {
    settings: settingsReducer
  },
});
