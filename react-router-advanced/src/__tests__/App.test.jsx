import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Home page by default', () => {
  render(<App />);
  
  // Check if the Home page is rendered by default
  const homeElement = screen.getByText(/Home/i); // Adjust this to match what is rendered
  expect(homeElement).toBeInTheDocument();
});
