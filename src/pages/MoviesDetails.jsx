import { useParams, Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieById } from 'services/API';

const MoviesDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

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
          <Link to={'cast'}>cast</Link>
        </li>
        <li>
          {' '}
          <Link to={'reviews'}>reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MoviesDetails;
