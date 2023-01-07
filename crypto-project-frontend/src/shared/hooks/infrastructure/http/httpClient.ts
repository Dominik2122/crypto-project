import { AxiosClient } from '@/shared/hooks/infrastructure/http/axiosClient';

export interface HttpClient {
  get<T>(url: string, config?: any): Promise<T>;
  post<T, R>(url: string, data: T, config?: any): Promise<R>;
}

export const getHttpClient: () => HttpClient = () => AxiosClient;
