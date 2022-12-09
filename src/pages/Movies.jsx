import { findMovie } from 'services/API';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Movies = () => {
  //   const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams('');
  const query = searchParams.get('query') || '';
  const handleSubmit = e => {
    e.preventDefault();

    console.dir(e.target);

    const search = e.target.elements.movie.value;
    setSearchParams(search !== '' ? { query: search } : {});
    // setSearch(e.target.elements.movie.value);
  };

  console.log(searchParams);

  useEffect(() => {
    findMovie(query).then(console.log);
  }, [query]);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="movie" />
      <button type="submit">Search</button>
    </form>
  );
};

export default Movies;
