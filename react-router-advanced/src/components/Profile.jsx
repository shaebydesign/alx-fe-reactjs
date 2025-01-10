import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';  // Nested ProfileDetails component
import ProfileSettings from './ProfileSettings';  // Nested ProfileSettings component

const Profile = () => {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <ul>
          <li>
            <Link to="/profile/details">Profile Details</Link>
          </li>
          <li>
            <Link to="/profile/settings">Profile Settings</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;
