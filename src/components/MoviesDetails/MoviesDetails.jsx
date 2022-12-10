import { useState, useEffect } from 'react';
import {
  useParams,
  Outlet,
  Link,
  useLocation,
  NavLink,
} from 'react-router-dom';
import { Suspense } from 'react';
import { getMovieById } from 'services/API';
import { imgSRC } from 'utils/imageHref';
import { Div } from './MoviesDetails.styled';

const MoviesDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  console.log('MOVIE', movie);

  useEffect(() => {
    getMovieById(movieId).then(({ data }) => {
      setMovie(data);
    });
  }, [movieId]);

  const { title, poster_path, genres, release_date, overview } = movie;
  console.log('genres', genres);

  return (
    <Div>
      <Link to={location.state?.from} className="backLink">
        Back to previous
      </Link>

      <div className="movie-details">
        <img src={imgSRC(poster_path)} alt={title} />

        <div className="details-wrapper">
          <h2>{title}</h2>

          <p>
            <i>{overview}</i>
          </p>

          {release_date ? (
            <p>
              <b>Release date:</b> {release_date}
            </p>
          ) : null}

          {genres?.length ? (
            <div>
              <p>
                <b>Ganres</b>
              </p>

              <ul>
                {genres.map(({ id, name }) => {
                  return (
                    <li key={id}>
                      <p>{name}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}

          <ul className="links">
            <li>
              <NavLink
                to={'cast'}
                state={{ from: location.state?.from }}
                className="cast"
              >
                All cast & crew
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'reviews'}
                state={{ from: location.state?.from }}
                className="reviews"
              >
                User reviews
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <Suspense>
        <Outlet />
      </Suspense>
    </Div>
  );
};

export default MoviesDetails;
