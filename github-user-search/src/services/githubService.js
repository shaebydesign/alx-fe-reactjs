import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users/';

export const getUserData = async (username) => {
    try {
        const response = await axios.get(`${GITHUB_API_URL}${username}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};


