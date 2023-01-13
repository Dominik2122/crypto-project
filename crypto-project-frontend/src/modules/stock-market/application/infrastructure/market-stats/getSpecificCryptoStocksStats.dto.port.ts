import CryptoStockMarket from '@/modules/stock-market/domain/market-stats/CryptoStockMarket';
import DefaultCryptoSymbols from '@/modules/stock-market/domain/DefaultCryptoSymbols';
import { QuoteAssetsSymbols } from '@/modules/stock-market/domain/QuoteAssetsSymbols';

export type GetSpecificCryptoStocksStatsDtoPort = (
  tickers: DefaultCryptoSymbols[],
  quoteAsset: QuoteAssetsSymbols,
) => CryptoStockMarket | undefined;
