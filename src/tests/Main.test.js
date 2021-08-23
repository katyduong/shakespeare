import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from '../pages/index';

test('renders learn react link', () => {
  render(<Main />);
  const linkElement = screen.getByText(/reviews/i);
  expect(linkElement).toBeInTheDocument();
});
