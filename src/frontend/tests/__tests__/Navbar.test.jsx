import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../../components/Navbar';

test('renders Navbar text correctly', () => {
  render(<Navbar />);
  const element = screen.getByText(/Navbar/i);
  expect(element).toBeInTheDocument();
});
