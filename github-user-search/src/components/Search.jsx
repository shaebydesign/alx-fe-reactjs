import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent form refresh
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data); // Set user data from API response
    } catch (err) {
      setError('Looks like we can’t find the user'); // Set error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}> {/* onSubmit is present */}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search for a GitHub user"
        />
        <button type="submit">Search</button> {/* button is present */}
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <h2>{userData.login}</h2>
          <img
            src={userData.avatar_url}
            alt={userData.login}
            style={{ width: '100px', borderRadius: '50%' }}
          />
          <h3>{userData.name}</h3>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
