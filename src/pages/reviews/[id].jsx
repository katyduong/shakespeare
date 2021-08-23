import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import StarRatings from 'react-star-ratings';
import { getReviewById } from '../../api/reviews';

const Review = () => {
  const [review, setReview] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchReviewById = async (id) => {
      if (id) {
        const response = await getReviewById(id);
        setReview(response);
      }
    };
    const { id } = router.query;
    fetchReviewById(id);
  }, [router]);

  if (!review) {
    return <div className="container-fluid">Loading...</div>;
  }
  const date = new Date(review.publish_date);

  return (
    <div className="container-fluid">
      <div className="jumbotron p-3 p-md-5 rounded">
        <div className="px-0">
          <h1 className="display-4">
            {review.rating}
            {'  '}
            <StarRatings
              rating={review.rating}
              starDimension="40px"
              starSpacing="2px"
            />
          </h1>
          <p>
            {date.toLocaleDateString()} {date.toLocaleTimeString()} by{' '}
            {review.author}
          </p>
          <p className="lead my-3">{review.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
