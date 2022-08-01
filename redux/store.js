import { createWrapper } from 'next-redux-wrapper';
import { driverSlice } from './driver/reducer';
import { standingsSlice } from './standings/reducer';
import { raceResultsSlice } from './race/reducer';
import { configureStore } from '@reduxjs/toolkit';

export const makeStore = () => {
  return configureStore({
    reducer: {
      [driverSlice.name]: driverSlice.reducer,
      [standingsSlice.name]: standingsSlice.reducer,
      [raceResultsSlice.name]: raceResultsSlice.reducer,
    },
  });
};

export const wrapper = createWrapper(makeStore);
