import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Reviews from '../pages/reviews/index';
import { reviewsData } from './testData';

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

test('renders Read more link', async () => {
  fetch.mockResponseOnce(JSON.stringify(reviewsData));
  await act(async () => {
    await ReactDOM.render(<Reviews />, container);
  });
  const link = container.querySelector('a');
  expect(link.textContent).toBe('Read more');
});

test('renders No Reviews Available when no data returns', async () => {
  fetch.mockResponseOnce(JSON.stringify([]));
  await act(async () => {
    await ReactDOM.render(<Reviews />, container);
  });
  const div = container.querySelector('div');
  expect(div.textContent).toBe('No Reviews Available');
});
