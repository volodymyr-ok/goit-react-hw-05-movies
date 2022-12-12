import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'services/API';
import { UL } from './Reviews.styled';

const Reviews = () => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();
  console.log('review', review);

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
      <UL>
        {review.map(({ id, content, author }) => {
          return (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          );
        })}
      </UL>
    </>
  );
};

export default Reviews;
