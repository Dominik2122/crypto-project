import { AssetSymbol } from '@/modules/stock-market/domain/AssetSymbol';
import { QuoteAssetsSymbols } from '@/modules/stock-market/domain/QuoteAssetsSymbols';
import CryptoMarketCandle from '@/modules/stock-market/domain/candles/CryptoMarketCandle';

export type GetAllCryptoCandlesDtoPort = (
  stock: AssetSymbol,
  interval: string,
  fiat: QuoteAssetsSymbols,
) => Promise<CryptoMarketCandle[]>;
