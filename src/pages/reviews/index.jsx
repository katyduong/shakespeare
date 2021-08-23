import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import StarRatings from 'react-star-ratings';
import { getReviews } from '../../api/reviews';
import CardSkeleton from '../../components/CardSkeleton';
import {
  sortByHighestRating,
  sortByLowestRating,
  sortByNewestReviews,
  sortByOldestReviews,
} from '../../utils/sort';

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
    return <CardSkeleton />;
  }

  if (reviews.length === 0) {
    return <div className="container-fluid">No Reviews Available</div>;
  }
  const onClickSelection = (sortBy) => {
    const r = [].concat(reviews.sort(sortBy));
    setReviews(r);
  };

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-end">
        <DropdownButton
          variant="secondary"
          title="Sort by"
          className="mt-2 mb-4"
        >
          <Dropdown.Item onClick={() => onClickSelection(sortByHighestRating)}>
            Highest rating
          </Dropdown.Item>
          <Dropdown.Item onClick={() => onClickSelection(sortByLowestRating)}>
            Lowest rating
          </Dropdown.Item>
          <Dropdown.Item onClick={() => onClickSelection(sortByNewestReviews)}>
            Newest review
          </Dropdown.Item>
          <Dropdown.Item onClick={() => onClickSelection(sortByOldestReviews)}>
            Oldest review
          </Dropdown.Item>
        </DropdownButton>
      </div>
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
