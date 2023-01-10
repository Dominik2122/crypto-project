import axios from 'axios';
import { HttpClient } from '@/shared/hooks/infrastructure/http/httpClient';

export const client = axios.create({
  baseURL: 'https://data.binance.com',
});

export const BinanceClient: HttpClient = {
  get<T>(url: string, config: any): Promise<T> {
    return client.get<T>(url, config).then((response) => response.data);
  },
  post<T, R>(url: string, data: T, config: any): Promise<R> {
    return client.post<R>(url, data, config).then((response) => response.data);
  },
};
