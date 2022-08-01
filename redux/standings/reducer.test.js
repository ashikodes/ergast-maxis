import { makeStore } from '../store';
import { initialState, setLoadingState, setStandings } from './reducer';

describe('Overall standings redux state', () => {
  const store = makeStore();
  it('Should match the intial state', () => {
    const state = store.getState().standings;
    expect(state).toEqual(initialState);
  });
  it('should set loading state', () => {
    store.dispatch(setLoadingState(true));
    expect(store.getState().standings.loading).toEqual(true);
  });
  it('should set race results', () => {
    const overallStandings = [{ driverId: 'Max' }];
    store.dispatch(setStandings(overallStandings));
    expect(store.getState().standings.driverStandings).toEqual(
      overallStandings
    );
  });
});
