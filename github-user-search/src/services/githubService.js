import axios from 'axios';

const searchUsers = async (query, location = '', minRepos = 0) => {
  try {
    // Build the search query with the provided filters
    let searchQuery = `${query}+in:login`; // Default search by username
    if (location) {
      searchQuery += `+location:${location}`; // Add location filter if provided
    }
    if (minRepos) {
      searchQuery += `+repos:>${minRepos}`; // Add minimum repositories filter if provided
    }

    // Send GET request to GitHub API
    const response = await axios.get(`https://api.github.com/search/users?q=${searchQuery}`);

    // Ensure the API responds with valid data (checking for potential API structure changes)
    if (response && response.data && response.data.items) {
      return response.data; // Return the list of users
    } else {
      throw new Error('No user data found');
    }
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; // Throw error to be handled in the calling component
  }
};

export default {
  searchUsers
};
