import axios from 'axios';

const getUsers = async ({ username, location, minRepos }) => {
  const query = `q=${username}${location ? `+location:${location}` : ''}${minRepos ? `+repos:>=${minRepos}` : ''}`;
  const url = `https://api.github.com/search/users?${query}`;

  try {
    const response = await axios.get(url);
    return response.data.items;
  } catch (error) {
    console.error('Error fetching GitHub users:', error);
    return [];
  }
};

export { getUsers };


