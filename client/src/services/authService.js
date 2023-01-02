import client from '../api/client';

const login = async (username, password) => {
  const response = await client.post('/auth/login', { username, password });
  return response.data;
};

const getCurrentUser = async () => {
  const response = await client.get('/auth/me');
  console.log(response);
  return response.data;
};

const authService = { login, getCurrentUser };

export default authService;
