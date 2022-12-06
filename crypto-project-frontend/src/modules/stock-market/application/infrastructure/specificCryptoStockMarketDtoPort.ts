import CryptoStockMarket from 'modules/stock-market/domain/CryptoStockMarket';
import CryptoSymbols from '@/modules/stock-market/domain/CryptoSymbols';
import CurrencySymbols from '@/shared/components/data/symbols/BaseAssetsSymbols';

export type SpecificCryptoStockMarketDtoPort = (
  tickers: CryptoSymbols[],
  currency: CurrencySymbols,
) => CryptoStockMarket | undefined;
