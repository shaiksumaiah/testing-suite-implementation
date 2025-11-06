import { render, screen } from '@testing-library/react';
import Navbar from '../../../src/frontend/components/Navbar';

test('renders navbar with title', () => {
  render(<Navbar />);
  expect(screen.getByText(/Navbar/i)).toBeInTheDocument();
});
