import { findMovie } from 'services/API';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Div } from './Movies.styles';

const Movies = () => {
  const [result, setResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const query = searchParams.get('query') || '';
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();

    const search = e.target.elements.movie.value;
    setSearchParams(search !== '' ? { query: search } : {});
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    findMovie(query).then(({ data: { results } }) => {
      setResult(results);
    });
  }, [query]);

  console.log('SEARCH RESULTS', result);

  return (
    <Div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="movie" />
        <button type="submit">Search</button>
      </form>

      <ul>
        {result.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <p>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Div>
  );
};

export default Movies;
