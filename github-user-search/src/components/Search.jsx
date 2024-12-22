import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    setLoading(true);
    setError(null);

    try {
      const data = await fetchUserData(username); // Fetch user data from API
      setUserData(data); // Set the fetched user data
    } catch (err) {
      setError('Looks like we can’t find the user'); // Handle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}> {/* Form submission handler */}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search for a GitHub user"
        />
        <button type="submit">Search</button> {/* Button inside the form */}
      </form>

      {loading && <p>Loading...</p>}  {/* Display loading message */}
      {error && <p>{error}</p>}       {/* Display error message */}
      
      {/* Display user data if available */}
      {userData && (
        <div>
          <h2>{userData.login}</h2>
          <img src={userData.avatar_url} alt={userData.login} style={{ width: '100px', borderRadius: '50%' }} />
          <h3>{userData.name}</h3>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
        </div>
      )}
    </div>
  );
};

export default Search;
