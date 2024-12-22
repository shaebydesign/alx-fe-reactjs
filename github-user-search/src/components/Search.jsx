import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    setLoading(true); // Set loading state to true
    setError(null); // Reset error state before each new request

    try {
      // Call the API and fetch user data based on the username
      const data = await fetchUserData(username);
      setUserData(data); // Set the fetched data to state
    } catch (err) {
      setError('Looks like we can’t find the user'); // Set error if something goes wrong
    } finally {
      setLoading(false); // Set loading state to false after the request
    }
  };

  return (
    <div>
      {/* Form for searching a GitHub user */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update username state
          placeholder="Search for a GitHub user"
        />
        <button type="submit">Search</button> {/* Button to submit the form */}
      </form>

      {/* Conditionally render loading, error, or user data */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.name} />
          <h2>{userData.name}</h2>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
