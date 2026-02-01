import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Ishanya Kukade', () => {
  render(<App />);
  const nameElement = screen.getByText(/Ishanya Kukade/i);
  expect(nameElement).toBeInTheDocument();
});
