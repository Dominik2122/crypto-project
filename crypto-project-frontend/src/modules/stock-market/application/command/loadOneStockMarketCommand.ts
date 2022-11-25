import Stocks from 'modules/stock-market/domain/Tickers';

export type LoadOneStockMarketCommand = (stock: Stocks) => void;
