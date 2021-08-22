import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getReviews } from '../../api/reviews';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await getReviews();
      setReviews(response);
    };
    fetchReviews();
  }, []);

  if (!reviews) {
    return <>Loading...</>;
  }

  if (reviews.length === 0) {
    return <>No Reviews</>;
  }

  return (
    <ul>
      {reviews.map((r) => {
        return (
          <li key={r.id}>
            <Link
              href={{
                pathname: `/reviews/${r.id}`,
                query: { id: r.id },
              }}
            >
              <a>{r.rating} review on date {r.publish_date}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
