import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/profile'; // Assuming the path is correct
import BlogPost from './components/BlogPost'; // Importing BlogPost component

function App() {
  return (
    <Router>
      <div>
        <h1>My React App</h1>
        <Routes>
          {/* Main Route */}
          <Route path="/" element={<Home />} />

          {/* Nested route for Profile */}
          <Route path="/profile/*" element={<Profile />} />

          {/* Dynamic route for BlogPost */}
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

// Simple Home Component
const Home = () => {
  return <div>Welcome to the Home Page!</div>;
};

export default App;
