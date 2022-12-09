import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from 'services/API';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const BASE_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    getMovieCast(movieId).then(({ data }) => {
      setCast(data.cast);
    });
  }, [movieId]);
  console.log(cast);

  return (
    <>
      <ul>
        {cast.map(({ id, character, name, profile_path }) => {
          return (
            <li key={id}>
              {profile_path ? (
                <img
                  src={`${BASE_URL}${profile_path}`}
                  width="200"
                  alt={name}
                />
              ) : (
                <p>HELLO</p>
              )}
              <p>{character}</p>
              <p>{name}</p>
            </li>
          );
        })}
      </ul>
      <p>CAST</p>
    </>
  );
};
export default Cast;
