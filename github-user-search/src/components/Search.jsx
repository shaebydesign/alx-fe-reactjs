import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the fetchUserData function

const Search = () => {
  const [username, setUsername] = useState(''); // State for storing the username input
  const [userData, setUserData] = useState(null); // State for storing the fetched user data
  const [loading, setLoading] = useState(false); // State to handle loading status
  const [error, setError] = useState(null); // State for handling errors

  // Handle form submission
  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    setLoading(true); // Set loading state to true while fetching data
    setError(null); // Reset the error state before each new search

    try {
      // Call the API to fetch user data based on the entered username
      const data = await fetchUserData(username);
      setUserData(data); // Store the fetched user data in the state
    } catch (err) {
      setError('Looks like we can’t find the user'); // Display error if API call fails
    } finally {
      setLoading(false); // Set loading to false after the API call finishes
    }
  };

  return (
    <div>
      {/* Search Form */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update username state with input value
          placeholder="Search for a GitHub user"
        />
        <button type="submit">Search</button> {/* Submit button */}
      </form>

      {/* Display loading message while data is being fetched */}
      {loading && <p>Loading...</p>}

      {/* Display error message if user is not found */}
      {error && <p>{error}</p>}

      {/* Display user data if fetch is successful */}
      {userData && (
        <div>
          <h2>{userData.login}</h2> {/* Display the GitHub username */}
          <img src={userData.avatar_url} alt={userData.login} style={{ width: '100px', borderRadius: '50%' }} />
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
