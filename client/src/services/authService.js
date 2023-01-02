import client from '../api/client';

export const login = async (username, password) => {
  const response = await client.post('/auth/login', { username, password });
  console.log(response);
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await client.get('/auth/me');
  console.log(response);
  return response.data;
};
