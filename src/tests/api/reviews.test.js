import { reviewsData, singleReview } from '../testData';
import { getReviews, getReviewById } from '../../api/reviews';

beforeEach(() => {
  fetch.resetMocks();
});

test('should fetch reviews', async () => {
  fetch.mockResponseOnce(JSON.stringify(reviewsData));
  const result = await getReviews();
  expect(result).toEqual(reviewsData);
  expect(fetch).toHaveBeenCalledTimes(1);
});

test('should fetch review by id', async () => {
  fetch.mockResponseOnce(JSON.stringify(singleReview));
  const result = await getReviewById(1);
  expect(result).toEqual(singleReview);
  expect(fetch).toHaveBeenCalledTimes(1);
});
