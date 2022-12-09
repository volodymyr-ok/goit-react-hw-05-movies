import { Routes, Route } from 'react-router-dom';
import { StyledDiv } from './App.styled';
import Layout from 'pages/Layout';
import Home from 'pages/Home';
import MoviesDetails from 'pages/MoviesDetails';
import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';
import Movies from 'pages/Movies';

export const App = () => {
  return (
    <StyledDiv>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </StyledDiv>
  );
};
