import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export const initialState = {
  driverStandings: [],
  loading: false,
};

export const standingsSlice = createSlice({
  name: 'standings',
  initialState,
  reducers: {
    setStandings(state, action) {
      state.driverStandings = action.payload;
    },
    setLoadingState(state, action) {
      state.loading = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.driverStandings,
      };
    },
  },
});

export const { setStandings, setLoadingState } = standingsSlice.actions;

export default standingsSlice.reducer;
