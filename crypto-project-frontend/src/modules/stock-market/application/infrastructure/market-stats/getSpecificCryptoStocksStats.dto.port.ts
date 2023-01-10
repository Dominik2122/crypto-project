import CryptoStockMarket from '@/modules/stock-market/domain/market-stats/CryptoStockMarket';
import DefaultCryptoSymbols from '@/modules/stock-market/domain/DefaultCryptoSymbols';
import CurrencySymbols from '@/shared/components/data/symbols/BaseAssetsSymbols';

export type GetSpecificCryptoStocksStatsDtoPort = (
  tickers: DefaultCryptoSymbols[],
  currency: CurrencySymbols,
) => CryptoStockMarket | undefined;
