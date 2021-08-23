import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import * as nextRouter from 'next/router';
import Review from '../pages/reviews/[id]';
import { singleReview } from './testData';
import * as reviewsAPI from '../api/reviews';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  fetch.resetMocks();
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test('initial renders', async () => {
  nextRouter.useRouter = jest.fn();
  nextRouter.useRouter.mockImplementation(() => ({
    route: '/reviews/9783221620868',
    pathname: '/reviews/9783221620868',
    query: { id: '9783221620868' },
    asPath: '/reviews/9783221620868',
  }));

  reviewsAPI.getReviewById = jest.fn();
  reviewsAPI.getReviewById.mockImplementation(() => singleReview);

  await act(async () => {
    await ReactDOM.render(<Review />, container);
  });

  const h1 = container.querySelector('h1');
  expect(h1.textContent).toContain('0.8');
  const p = container.querySelector('p');
  expect(p.textContent).toContain('9/5/2016 6:25:47 PM by Kaley Schiller');
});
