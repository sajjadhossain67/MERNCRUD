
import axios from 'axios';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post('/api/register', userData);
    return response.data.token; // Assuming your server returns a token on successful registration
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post('/api/login', { email, password });
    return response.data.token; // Assuming your server returns a token on successful login
  } catch (error) {
    throw error;
  }
};
