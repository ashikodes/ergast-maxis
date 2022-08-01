import { act } from '@testing-library/react';
import render from '../testUtils/render';
import StandingsPage from '../pages';

jest.mock('../redux/standings/action');
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn,
  useSelector: jest.fn().mockReturnValue({
    results: [
      {
        Driver: { driverId: 1, givenName: 'lee', familyName: 'jon' },
        points: 12,
        wins: 6,
      },
    ],
  }),
}));

describe('Standings page', () => {
  it('matches snapshot', async () => {
    let container;
    await act(async () => {
      ({ container } = render(<StandingsPage />));
    });
    expect(container).toMatchSnapshot();
  });
});
