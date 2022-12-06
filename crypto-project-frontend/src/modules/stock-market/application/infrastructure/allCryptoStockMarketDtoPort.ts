import CryptoStockMarket from 'modules/stock-market/domain/CryptoStockMarket';

export type AllCryptoStockMarketDtoPort = () => CryptoStockMarket[] | undefined;
