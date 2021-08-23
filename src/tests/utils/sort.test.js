import {
  sortByHighestRating,
  sortByLowestRating,
  sortByNewestReviews,
  sortByOldestReviews,
} from '../../utils/sort';
import { reviewsData } from '../testData';

test('sortByHighestRating', () => {
  const result = reviewsData.sort(sortByHighestRating);
  expect(result).toMatchSnapshot();
});

test('sortByLowestRating', () => {
  const result = reviewsData.sort(sortByLowestRating);
  expect(result).toMatchSnapshot();
});

test('sortByNewestReviews', () => {
  const result = reviewsData.sort(sortByNewestReviews);
  expect(result).toMatchSnapshot();
});

test('sortByOldestReviews', () => {
  const result = reviewsData.sort(sortByOldestReviews);
  expect(result).toMatchSnapshot();
});
