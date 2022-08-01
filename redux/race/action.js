import { setRaceResults, setLoadingState } from './reducer';

export const getRaceResults = ({ round = 'last' } = {}) => {
  return async dispatch => {
    dispatch(setLoadingState(true));
    try {
      const data = await fetch(
        `https://ergast.com/api/f1/current/${round}/results.json`
      );
      const response = await data.json();
      const [races] = response?.MRData?.RaceTable?.Races || [];
      const { Results: raceResults } = races;
      dispatch(setRaceResults(raceResults));
      dispatch(setLoadingState(false));
    } catch {
      dispatch(setLoadingState(false));
    }
  };
};
