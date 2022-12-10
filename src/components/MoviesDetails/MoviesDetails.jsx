import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieById } from 'services/API';
import { Suspense } from 'react';
import { imgSRC } from 'utils/imageHref';
import { Div } from './MoviesDetails.styled';

const MoviesDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  console.log('MOVIE DETAILS', movie);

  useEffect(() => {
    getMovieById(movieId).then(({ data }) => {
      setMovie(data);
    });
  }, [movieId]);

  const { title, poster_path } = movie;

  return (
    <Div>
      <Link to={location.state?.from}>Back to previous</Link>

      <div className="main-details">
        <img src={imgSRC(poster_path)} alt={title} />
        <h2>{title}</h2>
      </div>

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

      <Suspense>
        <Outlet />
      </Suspense>
    </Div>
  );
};

export default MoviesDetails;
