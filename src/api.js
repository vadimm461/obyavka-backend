import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default API;

export const fetchWelcome = async () => {
  try {
    const response = await API.get('/');
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    return null;
  }
};
