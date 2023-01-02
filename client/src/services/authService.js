import client from '../api/client';

const login = async (username, password) => {
  const response = await client.post('/auth/login', { username, password });
  return response.data;
};

const fetchCurrentUser = async () => {
  const response = await client.get('/auth/me');
  return response.data;
};

const logout = async () => {
  const response = await client.post('/auth/logout');
  return response.data;
};

const authService = { login, fetchCurrentUser, logout };

export default authService;
