import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/auth/';

export const registerUser = async (userData: { username: string; password: string; email: string }) => {
  const response = await axios.post(`${API_BASE_URL}register/`, userData);
  return response.data;
};

export const loginUser = async (credentials: { username: string; password: string }) => {
  const response = await axios.post(`${API_BASE_URL}login/`, credentials);
  return response.data;
};
