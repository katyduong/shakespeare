import React from 'react';
import renderer from 'react-test-renderer';
import CardSkeleton from '../../components/CardSkeleton';

test('renders CardSkeleton', () => {
  const tree = renderer.create(<CardSkeleton />).toJSON();
  expect(tree).toMatchSnapshot();
});
