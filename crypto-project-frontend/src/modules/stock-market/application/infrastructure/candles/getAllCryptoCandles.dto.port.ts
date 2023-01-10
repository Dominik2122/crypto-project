import CryptoStockMarketCandle from '@/modules/stock-market/domain/candles/CryptoStockMarketCandle';
import DefaultCryptoSymbols from '@/modules/stock-market/domain/DefaultCryptoSymbols';
import CurrencySymbols from '@/shared/components/data/symbols/BaseAssetsSymbols';

export type GetAllCryptoCandles = (
  stock: DefaultCryptoSymbols,
  interval: string,
  fiat?: CurrencySymbols,
) => Promise<CryptoStockMarketCandle[]>;
