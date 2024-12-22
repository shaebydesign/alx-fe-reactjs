import axios from 'axios';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // Return the user data from the API response
  } catch (error) {
    throw new Error('User not found'); // Handle the error if the user is not found
  }
};
