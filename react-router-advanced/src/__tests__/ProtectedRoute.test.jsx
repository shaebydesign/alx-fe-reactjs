import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute'; // Adjust path if necessary

test('redirects unauthenticated users to Login page', () => {
  const MockComponent = () => <h1>Protected Content</h1>;

  render(
    <BrowserRouter>
      <ProtectedRoute isAuthenticated={false} element={<MockComponent />} />
    </BrowserRouter>
  );

  // Check that the protected content is NOT displayed when user is unauthenticated
  expect(screen.queryByText('Protected Content')).not.toBeInTheDocument();
});

test('allows authenticated users to access ProtectedRoute', () => {
  const MockComponent = () => <h1>Protected Content</h1>;

  render(
    <BrowserRouter>
      <ProtectedRoute isAuthenticated={true} element={<MockComponent />} />
    </BrowserRouter>
  );

  // Check that the protected content IS displayed when user is authenticated
  expect(screen.getByText('Protected Content')).toBeInTheDocument();
});

test('renders the protected component correctly when authenticated', () => {
  const MockComponent = () => <h1>Protected Content</h1>;

  render(
    <BrowserRouter>
      <ProtectedRoute isAuthenticated={true} element={<MockComponent />} />
    </BrowserRouter>
  );

  // Ensure the MockComponent content is rendered
  expect(screen.getByText('Protected Content')).toBeInTheDocument();
});

test('does NOT render the protected component when unauthenticated', () => {
  const MockComponent = () => <h1>Protected Content</h1>;

  render(
    <BrowserRouter>
      <ProtectedRoute isAuthenticated={false} element={<MockComponent />} />
    </BrowserRouter>
  );

  // Ensure the MockComponent content is NOT rendered
  expect(screen.queryByText('Protected Content')).not.toBeInTheDocument();
});
