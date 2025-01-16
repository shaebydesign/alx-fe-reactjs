// src/components/__tests__/ProtectedRoute.test.jsx
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute';  // Adjust path if needed
import { useAuth } from '../../hooks/useAuth';  // Import the custom hook

jest.mock('../../hooks/useAuth');  // Mock useAuth hook

test('redirects unauthenticated users to Login page', () => {
  const MockComponent = () => <h1>Protected Content</h1>;
  
  // Mock `useAuth` to return `false` (unauthenticated)
  useAuth.mockReturnValue(false);

  render(
    <BrowserRouter>
      <ProtectedRoute element={<MockComponent />} />
    </BrowserRouter>
  );

  expect(screen.queryByText('Protected Content')).not.toBeInTheDocument();
});

test('allows authenticated users to access ProtectedRoute', () => {
  const MockComponent = () => <h1>Protected Content</h1>;
  
  // Mock `useAuth` to return `true` (authenticated)
  useAuth.mockReturnValue(true);

  render(
    <BrowserRouter>
      <ProtectedRoute element={<MockComponent />} />
    </BrowserRouter>
  );

  expect(screen.getByText('Protected Content')).toBeInTheDocument();
});
