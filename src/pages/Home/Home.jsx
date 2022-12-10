import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'services/API';
import { imgSRC } from 'utils/imageHref';
import { Heading, UL } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  console.log('HOME.MOVIES', movies);

  useEffect(() => {
    getTrendingMovies().then(({ data }) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <>
      <Heading>Trending today</Heading>
      <UL>
        {movies.map(({ title, id, poster_path }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <img src={imgSRC(poster_path)} alt="" />
                <h3>{title}</h3>
              </Link>
            </li>
          );
        })}
      </UL>
    </>
  );
};

export default Home;
