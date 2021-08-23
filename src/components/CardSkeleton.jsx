import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Skeleton from 'react-loading-skeleton';

const CardSkeleton = () => {
  const COUNT = 12;
  const repeatingSkeleton = [];
  for (let i = 0; i < COUNT; i += 1) {
    repeatingSkeleton.push(
      <Col key={i}>
        <Card>
          <Card.Header as="h5" className="align-items-center">
            <Skeleton />
          </Card.Header>
          <Card.Body>
            <Card.Title>
              {' '}
              <Skeleton />
            </Card.Title>
            <Card.Text>
              <Skeleton count={2} />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <Skeleton />
            </small>
          </Card.Footer>
        </Card>
      </Col>
    );
  }
  return repeatingSkeleton;
};

export default CardSkeleton;
