import { CryptoMarketCandlesInterval } from '@/modules/stock-market/domain/candles/CryptoMarketCandlesInterval';

export interface AllCryptoCandlesStatePort {
  interval?: CryptoMarketCandlesInterval;

  setInterval(interval: CryptoMarketCandlesInterval): void;
}
