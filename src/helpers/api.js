import axios from 'axios';

export const heroAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});