import axios from 'axios';
import apiConfig from '../config/api';

const { NODE_ENV } = process.env;
const { url: baseUrl } = NODE_ENV === 'production' ? apiConfig.production : apiConfig.development;
const apiUrl = `${baseUrl}/api/v1`;

const authApiUrl = `${apiUrl}/auth`;
const brandApiUrl = `${apiUrl}/brand`;

export const authApi = axios.create({
  baseURL: authApiUrl,
  responseType: 'json',
});

export const brandApi = axios.create({
  baseURL: brandApiUrl,
  responseType: 'json',
});
