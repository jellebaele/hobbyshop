import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:2999',
  withCredentials: true,
});
