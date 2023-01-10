import CryptoStockMarket from '@/modules/stock-market/domain/market-stats/CryptoStockMarket';

export type GetOneCryptoStockMarketQuery = (tickerSymbol: string) => CryptoStockMarket;
