import { act } from '@testing-library/react';
import render from '../testUtils/render';
import DriverResultsPage from '../pages/driver-results/[driverId]';

jest.mock('../redux/driver/action');
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn,
  useSelector: jest.fn().mockReturnValue({
    results: [
      {
        raceName: 'brix',
        round: 12,
        Results: [{ position: 6, points: 12 }],
      },
    ],
  }),
}));

describe('Driver results page', () => {
  it('matches snapshot', async () => {
    let container;
    await act(async () => {
      ({ container } = render(<DriverResultsPage />, {
        testRouterOptions: {
          pathname: '/driver-results/max',
          query: { driverId: 'max' },
        },
      }));
    });
    expect(container).toMatchSnapshot();
  });
});
