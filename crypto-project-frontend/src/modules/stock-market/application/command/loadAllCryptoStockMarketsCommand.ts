import Stocks from 'modules/stock-market/domain/Tickers';

export type LoadAllCryptoStockMarketsCommand = (stocks?: Stocks[]) => void;
