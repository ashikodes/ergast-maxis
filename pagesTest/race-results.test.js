import { act } from '@testing-library/react';
import render from '../testUtils/render';
import RaceResultsPage from '../pages/race-results';

jest.mock('../redux/race/action');
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn,
  useSelector: jest.fn().mockReturnValue({
    results: [
      {
        Driver: { driverId: 1, givenName: 'lee', familyName: 'jon' },
        FastestLap: {
          Time: { time: 121 },
          AverageSpeed: { speed: 22 },
        },
      },
    ],
  }),
}));

describe('Race results page', () => {
  it('matches snapshot', async () => {
    let container;
    await act(async () => {
      ({ container } = render(<RaceResultsPage />));
    });
    expect(container).toMatchSnapshot();
  });
});
