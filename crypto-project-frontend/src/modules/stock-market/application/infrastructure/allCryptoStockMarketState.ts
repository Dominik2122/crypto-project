import CryptoStockMarket from 'modules/stock-market/domain/CryptoStockMarket';

export interface AllCryptoStockMarketState {
  updateOne(cryptoTicker: CryptoStockMarket): void;

  tickers: CryptoStockMarket[];
}
