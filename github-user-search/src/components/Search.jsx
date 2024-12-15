import React, { useState, useEffect } from 'react';
import githubService from '../services/githubService'; // Make sure the import path is correct

const Search = () => {
  // State variables
  const [query, setQuery] = useState(''); // Username query
  const [location, setLocation] = useState(''); // Location query
  const [minRepos, setMinRepos] = useState(0); // Minimum repositories query
  const [users, setUsers] = useState([]); // Users array to store search results
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error message state

  // The function that triggers the API request
  const fetchUserData = async () => {
    // Don't search if no query is entered
    if (!query) return;

    setLoading(true); // Set loading state to true

    try {
      // Call githubService's searchUsers method, passing query, location, and minRepos
      const response = await githubService.searchUsers(query, location, minRepos);

      // If the API returns data, store it in the users state
      if (response && response.items) {
        setUsers(response.items);
      } else {
        setUsers([]);
      }

      setLoading(false); // Set loading state to false after fetching
    } catch (err) {
      // Handle any errors that occur during the API request
      setError('Error fetching users');
      setLoading(false); // Set loading state to false in case of an error
    }
  };

  // Trigger the fetchUserData function whenever query, location, or minRepos changes
  useEffect(() => {
    fetchUserData();
  }, [query, location, minRepos]);

  return (
    <div className="search-container">
      {/* Input field for GitHub username */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search GitHub users"
        className="input"
      />
      
      {/* Input field for location */}
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location (optional)"
        className="input"
      />
      
      {/* Input field for minimum number of repositories */}
      <input
        type="number"
        value={minRepos}
        onChange={(e) => setMinRepos(Number(e.target.value))}
        placeholder="Minimum Repos (optional)"
        className="input"
      />
      
      {/* Show loading state */}
      {loading && <p>Loading...</p>}

      {/* Show error message if something goes wrong */}
      {error && <p>{error}</p>}

      {/* Display the list of users */}
      <div className="user-results">
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.id} className="user-card">
              <img src={user.avatar_url} alt={user.login} className="user-avatar" />
              <h3>{user.login}</h3>
              <p>{user.location || 'Location not available'}</p>
              <p>{user.public_repos} Repositories</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          ))
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  );
};

export default Search;
