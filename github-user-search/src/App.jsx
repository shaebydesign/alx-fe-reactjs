// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import UserCard from './components/UserCard';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>GitHub User Search</h1>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Search />} />  {/* Home page with search */}
            <Route path="/user/:username" element={<UserCard />} />  {/* User profile page */}
          </Routes>
        </main>

        <footer>
          <p>Made with ❤️ by Shalom Metiboba</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
