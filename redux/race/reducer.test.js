import { makeStore } from '../store';
import { initialState, setLoadingState, setRaceResults } from './reducer';

describe('Race redux state', () => {
  const store = makeStore();
  it('Should match the intial state', () => {
    const state = store.getState().race;
    expect(state).toEqual(initialState);
  });
  it('should set loading state', () => {
    store.dispatch(setLoadingState(true));
    expect(store.getState().race.loading).toEqual(true);
  });
  it('should set race results', () => {
    const raceResults = [{ raceName: 'Race 1' }];
    store.dispatch(setRaceResults(raceResults));
    expect(store.getState().race.raceResults).toEqual(raceResults);
  });
});
