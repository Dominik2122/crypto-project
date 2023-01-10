import CryptoStockMarket from '@/modules/stock-market/domain/market-stats/CryptoStockMarket';

export type GetAllCryptoStocksStatsDtoPort = () => CryptoStockMarket[] | undefined;
