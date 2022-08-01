import { setStandings, setLoadingState } from './reducer';

export const getStandings = () => {
  return async dispatch => {
    dispatch(setLoadingState(true));
    try {
      const data = await fetch(
        'https://ergast.com/api/f1/current/driverStandings.json'
      );
      const response = await data.json();
      const [standings] =
        response?.MRData?.StandingsTable?.StandingsLists || [];
      const { DriverStandings } = standings;
      dispatch(setStandings(DriverStandings));
      dispatch(setLoadingState(false));
    } catch {
      dispatch(setLoadingState(false));
    }
  };
};
