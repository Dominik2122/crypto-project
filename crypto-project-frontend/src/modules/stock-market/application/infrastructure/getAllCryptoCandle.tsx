import CryptoStockMarketCandle from '@/modules/stock-market/domain/CryptoStockMarketCandle';
import CryptoSymbols from '@/modules/stock-market/domain/CryptoSymbols';
import CurrencySymbols from '@/shared/components/data/symbols/BaseAssetsSymbols';

export type GetAllCryptoCandles = (
  stock: CryptoSymbols,
  interval: string,
  fiat?: CurrencySymbols,
) => Promise<CryptoStockMarketCandle[]>;
