import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from 'services/API';
import { imgSRC } from 'utils/imageHref';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(({ data }) => {
      setCast(data.cast);
    });
  }, [movieId]);
  // console.log(cast);

  return (
    <>
      <ul>
        {cast.map(({ id, character, name, profile_path }) => {
          return (
            <li key={id}>
              <img src={imgSRC(profile_path)} width="200" alt={name} />
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
