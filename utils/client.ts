import axios, { AxiosRequestConfig } from 'axios';
import { Agent } from 'https';

const baseOptions: AxiosRequestConfig = {
  proxy: false,
  httpsAgent: Agent,
  httpAgent: Agent,
  baseURL: process.env.host,
};

const apiClient = axios.create(baseOptions);

export default apiClient;
