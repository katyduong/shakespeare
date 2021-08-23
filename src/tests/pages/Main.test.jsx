import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from '../../pages/index';

test('renders Reviews for Shakespeare text', () => {
  render(<Main />);
  const description = screen.getByText(/Reviews for Shakepeare/i);
  expect(description).toBeInTheDocument();
  const button = screen.getByText(/Learn more/i);
  expect(button).toBeInTheDocument();
});
