const BASE_URL = 'https://jsonplaceholder.typicode.com';

const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export const getUsers = async () => fetchData('users');
export const getPosts = async () => fetchData('posts');
export const getComments = async () => fetchData('comments');
