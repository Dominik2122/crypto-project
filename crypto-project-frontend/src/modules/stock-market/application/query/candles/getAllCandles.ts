import CryptoMarketCandle from '@/modules/stock-market/domain/candles/CryptoMarketCandle';

export type GetAllCandles = () => CryptoMarketCandle[] | undefined;
