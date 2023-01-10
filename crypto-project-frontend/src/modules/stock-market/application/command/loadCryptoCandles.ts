import Stocks from '@/modules/stock-market/domain/DefaultCryptoSymbols';
import CurrencySymbols from '@/shared/components/data/symbols/BaseAssetsSymbols';
import CryptoStockMarketCandle from '@/modules/stock-market/domain/candles/CryptoStockMarketCandle';

export type LoadCryptoCandles = (
  stocks: Stocks,
  fiat?: CurrencySymbols,
) => CryptoStockMarketCandle[];
