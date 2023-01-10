import CryptoStockMarketCandle from '@/modules/stock-market/domain/candles/CryptoStockMarketCandle';

export interface AllCryptoCandlesStatePort {
  interval:
    candles
  CryptoStockMarketCandle;
  :
  [];

  add(candles: CryptoStockMarketCandle[]): void;
}
