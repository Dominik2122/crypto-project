import { AxiosClient } from '@/shared/hooks/infrastructure/http/axiosClient';
import { BinanceClient } from '@/shared/hooks/infrastructure/http/binanceClient';

export interface HttpClient {
  get<T>(url: string, config?: any): Promise<T>;
  post<T, R>(url: string, data: T, config?: any): Promise<R>;
}

export const getHttpClient: () => HttpClient = () => AxiosClient;

export const getMarketHttpClient: () => HttpClient = () => BinanceClient;
