import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'services/API';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies().then(({ data }) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <>
      <ul>
        {movies.map(({ title, id }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <p>{title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
