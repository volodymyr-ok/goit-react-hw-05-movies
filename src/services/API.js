import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'api_key=2d54f3365ed9e7717bfee9cb79f47a9c';

export const getTrendingMovies = () => {
  return axios.get(`${baseURL}trending/movie/day?${API_KEY}`);
};

export const getMovieById = id => {
  return axios.get(`${baseURL}movie/${id}?${API_KEY}`);
};

export const getMovieReviews = id => {
  return axios.get(`${baseURL}movie/${id}/reviews?${API_KEY}`);
};

export const getMovieCast = id => {
  return axios.get(`${baseURL}movie/${id}/credits?${API_KEY}`);
};

export const findMovie = query => {
  return axios.get(`${baseURL}search/movie?${API_KEY}&query=${query}`);
};
