import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from 'services/API';
import { imgSRC } from 'utils/imageHref';
import { Div } from './Cast.styled';

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
    <Div>
      <h3>CAST</h3>

      <ul>
        {cast.map(({ id, character, name, profile_path }) => {
          return (
            <li key={id}>
              <img src={imgSRC(profile_path)} width="200" alt={name} />
              <p>
                <b>Character:</b> {character}
              </p>
              <p>
                <b>Actor:</b> {name}
              </p>
            </li>
          );
        })}
      </ul>
    </Div>
  );
};
export default Cast;
