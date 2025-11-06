import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../../components/Login';

test('renders Login form correctly', () => {
  render(<Login />);
  const heading = screen.getByText(/Login/i);
  expect(heading).toBeInTheDocument();
});
