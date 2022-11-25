import CryptoStockMarket from 'modules/stock-market/domain/CryptoStockMarket';

export type GetOneCryptoStockMarketQuery = (tickerSymbol: string) => CryptoStockMarket;
