import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStandings } from '../redux/standings/action';
import { useRouter } from 'next/router';

export default function OverallStandings() {
  const { results: driverStandings, loading } = useSelector(
    ({ standings }) => ({
      results: standings.driverStandings.slice(0, 10) || [],
      loading: standings.loading,
    })
  );
  const dispatch = useDispatch();
  const { push } = useRouter();

  useEffect(() => {
    if (!driverStandings.length) {
      dispatch(getStandings());
    }
  }, [dispatch, driverStandings.length]);
  return (
    <>
      <div className="main-heading">
        <a onClick={() => push('/race-results')}>View race results</a>
        <h2>Overall Standings in Races</h2>
      </div>
      <div className="main-content">
        {loading && <h2>loading</h2>}
        {!loading &&
          driverStandings.map(
            (
              { Driver: { driverId, givenName, familyName }, points, wins },
              index
            ) => (
              <span key={index} className="card">
                <h3 onClick={() => push(`/driver-results/${driverId}`)}>
                  {givenName} {familyName}
                  <span>&rarr;</span>
                </h3>
                <p>Points - {points}</p>
                <p>Wins - {wins}</p>
              </span>
            )
          )}
      </div>
    </>
  );
}
