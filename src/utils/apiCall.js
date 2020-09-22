import axios from 'axios';

const API_URL = 'http://www.omdbapi.com/';
const API_KEY = 'd50d2e7d';

export const apiCall = axios.create({
  baseURL: API_URL,
  params: {
    apikey: API_KEY,
  },
});
