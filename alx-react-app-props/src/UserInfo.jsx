// src/UserInfo.jsx
import React from 'react';
import UserDetails from './UserDetails';
import { useUserContext } from './UserContext';

function UserInfo() {
  const userData = useUserContext();

  return <UserDetails userData={userData} />;
}

export default UserInfo;
