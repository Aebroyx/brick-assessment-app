const axios = require('axios');

async function searchGitHubUsers(query) {
  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error searching GitHub users:', error);
    throw error;
  }
}

async function searchGitHubRepositories(query) {
  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error searching GitHub repositories:', error);
    throw error;
  }
}