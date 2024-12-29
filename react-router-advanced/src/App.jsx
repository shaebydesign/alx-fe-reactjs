import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/profile';  // Corrected path to match the actual file name (lowercase 'profile')

function App() {
  return (
    <Router>
      <div>
        <h1>My React App</h1>
        <Routes>
          {/* Main Route */}
          <Route path="/" element={<Home />} />  {/* Home page as an example */}
          
          {/* Nested route for Profile */}
          <Route path="/profile/*" element={<Profile />} />
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
