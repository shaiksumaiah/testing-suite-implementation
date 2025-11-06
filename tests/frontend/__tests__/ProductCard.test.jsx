import { render, screen } from '@testing-library/react';
import ProductCard from '../../../src/frontend/components/ProductCard';

test('renders product details', () => {
  render(<ProductCard name="Laptop" price={50000} />);
  expect(screen.getByText(/Laptop/i)).toBeInTheDocument();
  expect(screen.getByText(/₹50000/i)).toBeInTheDocument();
});
