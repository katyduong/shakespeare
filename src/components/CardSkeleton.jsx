import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-end">
        <Skeleton className="my-4" width={90} />
      </div>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {repeatingSkeleton}
      </Row>
    </div>
  );
};

export default CardSkeleton;
