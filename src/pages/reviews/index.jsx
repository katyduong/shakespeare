import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StarRatings from 'react-star-ratings';
import { getReviews } from '../../api/reviews';
import CardSkeleton from '../../components/CardSkeleton';

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
    return (
      <div className="container-fluid">
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
          <CardSkeleton />
        </Row>
      </div>
    );
  }

  if (reviews.length === 0) {
    return <div className="container-fluid">No Reviews Available</div>;
  }

  return (
    <div className="container-fluid">
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {reviews.map((r) => {
          const date = new Date(r.publish_date);
          return (
            <Col key={r.id}>
              <Card>
                <Card.Header as="h5" className="align-items-center">
                  {r.rating}
                  {'  '}
                  <StarRatings
                    rating={r.rating}
                    starDimension="16px"
                    starSpacing="2px"
                  />
                </Card.Header>
                <Card.Body>
                  <Card.Title>{r.author}</Card.Title>
                  <Card.Text>
                    {r.body.length > 30
                      ? `${r.body.substring(0, 30)}...`
                      : r.body}
                  </Card.Text>
                  <Card.Link href={`/reviews/${r.id}`}>Read more</Card.Link>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    Published on {date.toLocaleDateString()}{' '}
                    {date.toLocaleTimeString()}
                  </small>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Reviews;
