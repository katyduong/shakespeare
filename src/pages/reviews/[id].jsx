import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
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
    return <>Loading...</>;
  }
  return (
    <>
      <h1>{review.rating}</h1>
      <p>{review.body}</p>
			<p>{review.author}</p>
    </>
  );
};

export default Review;
