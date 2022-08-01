import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRaceResults } from '../redux/race/action';

export const ResultsPage = () => {
  const { results: raceResults, loading } = useSelector(({ race }) => ({
    results: race.raceResults.slice(0, 10) || [],
    loading: race.loading,
  }));
  const router = useRouter();
  const { push, query } = router;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRaceResults(query));
  }, [dispatch, query]);
  return (
    <>
      <div className="main-heading">
        <a onClick={() => push('/')}>View overall standings</a>
        <h2>Race results</h2>
      </div>
      {loading && <h2>Loading</h2>}
      <div className="main-content">
        {!loading &&
          raceResults.map(
            (
              {
                Driver: { driverId, givenName, familyName } = {},
                FastestLap: {
                  Time: { time } = {},
                  AverageSpeed: { speed } = {},
                } = {},
              },
              index
            ) => (
              <span key={index} className="card">
                <h3 onClick={() => push(`/driver-results/${driverId}`)}>
                  {givenName} {familyName}
                  <span>&rarr;</span>
                </h3>
                <p>Fastest Lap Time - {time}</p>
                <p>Average speed - {speed}</p>
              </span>
            )
          )}
      </div>
    </>
  );
};

export default ResultsPage;
