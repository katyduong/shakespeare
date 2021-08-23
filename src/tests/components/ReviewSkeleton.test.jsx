import React from 'react';
import renderer from 'react-test-renderer';
import ReviewSkeleton from '../../components/ReviewSkeleton';

test('renders ReviewSkeleton', () => {
  const tree = renderer.create(<ReviewSkeleton />).toJSON();
  expect(tree).toMatchSnapshot();
});
