import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';  // Corrected path to match the actual file name
import BlogPost from './components/BlogPost'; // Import BlogPost component
import ProtectedRoute from './components/ProtectedRoute';  // Import ProtectedRoute

function App() {
  return (
    <Router>
      <div>
        <h1>My React App</h1>
        <Routes>
          {/* Main Route */}
          <Route path="/" element={<Home />} />  {/* Home page as an example */}

          {/* Protected Route for Profile */}
          <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />  {/* Protected Profile page */}

          {/* Dynamic Route for Blog Post */}
          <Route path="/blog/:id" element={<BlogPost />} />  {/* BlogPost page */}
        </Routes>
      </div>
    </Router>
  );
}

// Simple Home Component as an example
const Home = () => {
  return <div>Welcome to the Home Page!</div>;
};

export default App;
