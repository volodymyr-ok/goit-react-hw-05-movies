import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'services/API';

const Reviews = () => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(({ data }) => {
      setReview(data.results);
    });
  }, [movieId]);
  console.log(review);

  if (!review.length) {
    return <p>Sorry, we don't have any reviews for this movie.</p>;
  }

  return (
    <>
      <ul>
        {review.map(({ id, content, author }) => {
          return (
            <li key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Reviews;
