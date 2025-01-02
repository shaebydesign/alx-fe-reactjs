import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/profile-details" element={<ProfileDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
