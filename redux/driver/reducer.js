import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export const initialState = {
  driverResults: [],
  loading: false,
};

export const driverSlice = createSlice({
  name: 'driver',
  initialState,
  reducers: {
    setDriverResults(state, action) {
      state.driverResults = action.payload;
    },
    setLoadingState(state, action) {
      state.loading = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.driverResults,
      };
    },
  },
});

export const { setDriverResults, setLoadingState } = driverSlice.actions;

export default driverSlice.reducer;
