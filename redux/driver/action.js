import { setDriverResults, setLoadingState } from './reducer';

export const getDriverResults = ({ driverId } = {}) => {
  return async dispatch => {
    dispatch(setLoadingState(true));
    try {
      const data = await fetch(
        `https://ergast.com/api/f1/current/drivers/${driverId}/results.json`
      );
      const response = await data.json();
      const races = response?.MRData?.RaceTable?.Races || [];
      dispatch(setDriverResults(races));
      dispatch(setLoadingState(false));
    } catch {
      dispatch(setLoadingState(false));
    }
  };
};
