import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const ReviewSkeleton = () => (
  <SkeletonTheme color="#f5f5f5" highlightColor="#e9ecef">
    <div className="jumbotron p-3 p-md-5 rounded">
      <div className="px-0">
        <h1 className="display-4">
          <Skeleton />
        </h1>
        <p>
          <Skeleton />
        </p>
        <p className="lead my-3">
          <Skeleton count={2} />
        </p>
      </div>
    </div>
  </SkeletonTheme>
);

export default ReviewSkeleton;
