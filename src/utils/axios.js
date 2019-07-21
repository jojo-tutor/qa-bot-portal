import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.PORTAL_HOST,
});

export default instance;
