import axios from 'axios';

const searchUsers = async (query, location = '', minRepos = 0) => {
  try {
    let searchQuery = `${query}+in:login`; // Default search by username

    // Append location if provided
    if (location) {
      searchQuery += `+location:${location}`;
    }

    // Append minRepos if provided
    if (minRepos > 0) {
      searchQuery += `+repos:>${minRepos}`;
    }

    const response = await axios.get(`https://api.github.com/search/users?q=${searchQuery}`);
    
    if (response.data && response.data.items) {
      return response.data; // Return the users found
    } else {
      return { items: [] }; // Return empty array if no results
    }
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; // Propagate error for further handling in component
  }
};

export default { searchUsers };

