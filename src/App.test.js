// src/App.test.js

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main heading', () => {
  render(<App />);
  // We'll check for the main heading of our app instead
  const headingElement = screen.getByText(/Party Menu Selection/i);
  expect(headingElement).toBeInTheDocument();
});
