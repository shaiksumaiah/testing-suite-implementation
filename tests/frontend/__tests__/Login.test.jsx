import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../../../src/frontend/components/Login';

test('renders login form', () => {
  render(<Login />);
  expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
});

test('shows welcome after login', () => {
  render(<Login />);
  fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'Sufyan' } });
  fireEvent.click(screen.getByText(/login/i));
  expect(screen.getByText(/welcome Sufyan/i)).toBeInTheDocument();
});
