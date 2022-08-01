import { getDriverResults } from './action';
import { makeStore } from '../store';

const newDrivers = [{ name: 'abel' }, { name: 'lee' }];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({ MRData: { RaceTable: { Races: newDrivers } } }),
  })
);

describe('Driver results actions - getDriverResults', () => {
  const store = makeStore();
  it('should fetch results', async () => {
    await store.dispatch(getDriverResults({ driverId: 'max' }));
    expect(store.getState().driver.driverResults).toEqual(newDrivers);
  });
});
