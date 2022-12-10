const BASE_URL = 'https://image.tmdb.org/t/p/w500';

export function imgSRC(id) {
  return id ? `${BASE_URL}${id}` : 'no img';
}
