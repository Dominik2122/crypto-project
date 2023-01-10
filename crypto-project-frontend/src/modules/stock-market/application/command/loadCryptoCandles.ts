import Stocks from '@/modules/stock-market/domain/CryptoSymbols';
import CurrencySymbols from '@/shared/components/data/symbols/BaseAssetsSymbols';
import CryptoStockMarketCandle from '@/modules/stock-market/domain/CryptoStockMarketCandle';

export type LoadCryptoStockMarketsCommand = (
  stocks: Stocks,
  fiat?: CurrencySymbols,
) => CryptoStockMarketCandle[];
