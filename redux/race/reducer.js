import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export const initialState = {
  raceResults: [],
  loading: false,
};

export const raceResultsSlice = createSlice({
  name: 'race',
  initialState,
  reducers: {
    setRaceResults(state, action) {
      state.raceResults = action.payload;
    },
    setLoadingState(state, action) {
      state.loading = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.raceResults,
      };
    },
  },
});

export const { setRaceResults, setLoadingState } = raceResultsSlice.actions;

export default raceResultsSlice.reducer;
