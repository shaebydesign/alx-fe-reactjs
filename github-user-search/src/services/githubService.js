import axios from 'axios';

// Function to fetch user data from GitHub API
export const fetchUserData = async (username) => {
  try {
    // Make the API request to GitHub's user endpoint
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // Return the user data
  } catch (error) {
    throw new Error('User not found'); // Throw error if the user is not found or there's an issue with the API request
  }
};
