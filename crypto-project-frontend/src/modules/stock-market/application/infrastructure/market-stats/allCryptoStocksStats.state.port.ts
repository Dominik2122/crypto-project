import CryptoStockMarket from '@/modules/stock-market/domain/market-stats/CryptoStockMarket';

export interface AllCryptoStocksStatsStatePort {
  tickers: CryptoStockMarket[];

  updateOne(cryptoTicker: CryptoStockMarket): void;

  updateAll(cryptoTickers: CryptoStockMarket[]): void;
}
