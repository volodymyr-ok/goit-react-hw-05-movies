import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieById } from 'services/API';
import { Suspense } from 'react';

const MoviesDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  console.log('location', location);

  useEffect(() => {
    getMovieById(movieId).then(({ data }) => {
      setMovie(data);
    });
  }, [movieId]);

  console.log(movie);
  const { title } = movie;

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        <li>
          <Link to={'cast'} state={{ from: location.state?.from }}>
            cast
          </Link>
        </li>
        <li>
          {' '}
          <Link to={'reviews'} state={{ from: location.state?.from }}>
            reviews
          </Link>
        </li>
      </ul>
      <Link to={location.state?.from}>Back to previous</Link>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MoviesDetails;
