import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <Navigate to="/login" />;
};
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProtectedRoute from '../routes/ProtectedRoute';

test('redirects unauthenticated users to Home page', () => {
  const MockComponent = () => <h1>Protected Content</h1>;
  render(
    <BrowserRouter>
      <ProtectedRoute isAuthenticated={false}>
        <MockComponent />
      </ProtectedRoute>
    </BrowserRouter>
  );

  expect(screen.queryByText('Protected Content')).not.toBeInTheDocument();
});

test('allows authenticated users to access ProtectedRoute', () => {
  const MockComponent = () => <h1>Protected Content</h1>;
  render(
    <BrowserRouter>
      <ProtectedRoute isAuthenticated={true}>
        <MockComponent />
      </ProtectedRoute>
    </BrowserRouter>
  );

  expect(screen.getByText('Protected Content')).toBeInTheDocument();
});
