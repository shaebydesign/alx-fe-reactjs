import React, { useState, useEffect } from 'react';
import githubService from '../services/githubService'; // Assuming this is where the API calls are made

const Search = () => {
  const [query, setQuery] = useState(''); // Query input state
  const [users, setUsers] = useState([]); // Users array state
  const [loading, setLoading] = useState(false); // Loading state for async operation
  const [error, setError] = useState(''); // Error state for API call

  // Fetch data using async/await
  const fetchUsers = async () => {
    if (!query) return; // Don't make API call if query is empty
    setLoading(true); // Set loading to true when starting the fetch
    try {
      const response = await githubService.searchUsers(query); // API call to fetch users
      setUsers(response.data.items); // Save the users into state
      setLoading(false); // Set loading to false once data is fetched
    } catch (err) {
      setError('Failed to fetch users'); // Handle error if the API call fails
      setLoading(false); // Set loading to false in case of an error
    }
  };

  // Trigger fetch when query changes
  useEffect(() => {
    fetchUsers(); // Call fetchUsers whenever the query changes
  }, [query]);

  return (
    <div className="search-container">
      {/* Input field for user search */}
      <input
        type="text"
        value={query} // Bind input value to query state
        onChange={(e) => setQuery(e.target.value)} // Update query state on input change
        placeholder="Search GitHub users"
        className="input"
      />
      {/* Display loading state */}
      {loading && <p>Loading...</p>}
      {/* Display error message if there's an error */}
      {error && <p>{error}</p>}
      
      {/* Display the list of users */}
      <div className="user-results">
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.id} className="user-card">
              {/* Display user details */}
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
          // Display a message if no users are found
          <p>No users found</p>
        )}
      </div>
    </div>
  );
};

export default Search;
