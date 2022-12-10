const BASE_URL = 'https://image.tmdb.org/t/p/w500';

export function imgSRC(id) {
  return id
    ? `${BASE_URL}${id}`
    : 'https://www.pngkit.com/png/detail/26-262771_question-mark-pics-question-mark-hand-drawn.png';
}
