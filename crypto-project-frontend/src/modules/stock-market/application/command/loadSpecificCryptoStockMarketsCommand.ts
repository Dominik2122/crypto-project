import Stocks from '@/modules/stock-market/domain/CryptoSymbols';
import CurrencySymbols from '@/shared/components/data/symbols/BaseAssetsSymbols';

export type LoadSpecificCryptoStockMarketsCommand = (
  stocks: Stocks[],
  fiat?: CurrencySymbols,
) => void;
