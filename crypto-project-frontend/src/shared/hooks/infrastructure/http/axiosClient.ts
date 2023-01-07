import axios from 'axios';
import { HttpClient } from '@/shared/hooks/infrastructure/http/httpClient';

export const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.response.use((response) => response);
export const AxiosClient: HttpClient = {
  get<T>(url: string, config: any): Promise<T> {
    return client.get<T>(url, config).then((response) => response.data);
  },
  post<T, R>(url: string, data: T, config: any): Promise<R> {
    return client.post<R>(url, data, config).then((response) => response.data);
  },
};
