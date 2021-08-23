import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import * as nextRouter from 'next/router';
import Review from '../pages/reviews/[id]';
import { singleReview } from './testData';

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

test('renders rating', async () => {
  nextRouter.useRouter = jest.fn();
  nextRouter.useRouter.mockImplementation(() => ({
    route: '/reviews/9783221620868',
    pathname: '/reviews/9783221620868',
    query: { id: '9783221620868' },
    asPath: '/reviews/9783221620868',
  }));
  fetch.mockResponseOnce(JSON.stringify(singleReview));

  await act(async () => {
    await ReactDOM.render(<Review />, container);
  });

  const div = container.querySelector('div');
  expect(div.textContent).toContain('Loading');
});
