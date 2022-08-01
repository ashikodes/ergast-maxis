import { makeStore } from '../store';
import { initialState, setLoadingState, setDriverResults } from './reducer';

describe('Driver redux state', () => {
  const store = makeStore();
  it('Should match the intial state', () => {
    const state = store.getState().driver;
    expect(state).toEqual(initialState);
  });
  it('should set loading state', () => {
    store.dispatch(setLoadingState(true));
    expect(store.getState().driver.loading).toEqual(true);
  });
  it('should set driver results', () => {
    const driverResults = [{ name: 'new driver' }];
    store.dispatch(setDriverResults(driverResults));
    expect(store.getState().driver.driverResults).toEqual(driverResults);
  });
});
