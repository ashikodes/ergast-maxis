import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDriverResults } from '../../redux/driver/action';

export const DriverResultsPage = () => {
  const { results: driverResults, loading } = useSelector(({ driver }) => ({
    results: driver.driverResults.slice(0, 10) || [],
    loading: driver.loading,
  }));
  const { givenName, familyName } =
    (driverResults[0]?.Results || [])[0]?.Driver || {};
  const router = useRouter();
  const { push, query } = router;
  const { driverId } = query;
  const dispatch = useDispatch();
  useEffect(() => {
    if (driverId) {
      dispatch(getDriverResults({ driverId }));
    }
  }, [dispatch, driverId]);
  return (
    <>
      <div className="main-heading">
        <a onClick={() => push('/')}>View overall standings</a>
        <h2>
          Driver results
          {!loading &&
            givenName &&
            familyName &&
            `: ${givenName} ${familyName}`}
        </h2>
      </div>
      {loading && <h2>Loading</h2>}
      <div className="main-content">
        {!loading &&
          driverResults.map(
            ({ Results: results = [], raceName, round }, index) => (
              <span key={index} className="card">
                <h3 onClick={() => push(`/race-results/?round=${round}`)}>
                  {raceName}
                  <span>&rarr;</span>
                </h3>
                <p>Position - {results[0]?.position}</p>
                <p>Points - {results[0]?.points}</p>
              </span>
            )
          )}
      </div>
    </>
  );
};

export default DriverResultsPage;
