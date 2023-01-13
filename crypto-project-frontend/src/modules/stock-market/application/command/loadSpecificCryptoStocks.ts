import { QuoteAssetsSymbols } from '@/modules/stock-market/domain/QuoteAssetsSymbols';
import DefaultCryptoSymbols from '@/modules/stock-market/domain/DefaultCryptoSymbols';

export type LoadSpecificCryptoStocks = (
  stocks: DefaultCryptoSymbols[],
  fiat?: QuoteAssetsSymbols,
) => void;
