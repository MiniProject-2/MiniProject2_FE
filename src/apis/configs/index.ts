import { useAccessTokenStore } from '@/store/acceessTokenStore';
import axios, { AxiosInstance } from 'axios';

export const baseURL = `${process.env.NEXT_PUBLIC_MOCK_SERVER_BASE_URL}`;

export const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  withCredentials: false,
});

export const axiosWithToken: AxiosInstance = axios.create({
  baseURL,
  withCredentials: false,
});

axiosWithToken.interceptors.request.use((config: any) => {
  const accessToken = localStorage.getItem('needMoreTaskToken') || '';

  return { ...config, headers: { Authorization: `Bearer ${accessToken}` } };
});
