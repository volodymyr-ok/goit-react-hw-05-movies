import { findMovie } from 'services/API';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Div } from './Movies.styled';
import { FaSearch } from 'react-icons/fa';
import { imgSRC } from 'utils/imageHref';

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
        <button type="submit">
          <FaSearch />
        </button>
      </form>

      <ul>
        {result.map(({ id, title, poster_path }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img src={imgSRC(poster_path)} alt={title} />
              <h3>{title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </Div>
  );
};

export default Movies;
