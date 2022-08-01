import { getRaceResults } from './action';
import { makeStore } from '../store';

const newRaces = [{ name: 'race 1' }, { name: 'race 2' }];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        MRData: { RaceTable: { Races: [{ Results: newRaces }] } },
      }),
  })
);

describe('Race results actions - getRaceResults', () => {
  const store = makeStore();
  it('should fetch results', async () => {
    await store.dispatch(getRaceResults({ driverId: 'max' }));
    expect(store.getState().race.raceResults).toEqual(newRaces);
  });
});
