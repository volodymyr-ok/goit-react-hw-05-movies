import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { StyledDiv } from './App.styled';
import Layout from 'pages/Layout/Layout';
const Home = lazy(() => import('pages/Home'));
const Cast = lazy(() => import('pages/Cast'));
const MoviesDetails = lazy(() => import('pages/MoviesDetails'));
const Reviews = lazy(() => import('pages/Reviews'));
const Movies = lazy(() => import('pages/Movies'));

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
