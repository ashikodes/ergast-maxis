import { getStandings } from './action';
import { makeStore } from '../store';

const overallStandings = [{ driverId: 'abel' }, { driverId: 'lee' }];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        MRData: {
          StandingsTable: {
            StandingsLists: [{ DriverStandings: overallStandings }],
          },
        },
      }),
  })
);

describe('Overall standings actions - getStandings', () => {
  const store = makeStore();
  it('should fetch results', async () => {
    await store.dispatch(getStandings());
    expect(store.getState().standings.driverStandings).toEqual(
      overallStandings
    );
  });
});
