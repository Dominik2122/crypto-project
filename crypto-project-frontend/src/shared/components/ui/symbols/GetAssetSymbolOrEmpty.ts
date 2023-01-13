import { QuoteAssetsSymbols } from '@/modules/stock-market/domain/QuoteAssetsSymbols';

export const getAssetSymbolOrEmpty = (symbol: string) => {
  switch (symbol) {
    case QuoteAssetsSymbols.USD:
      return '$';
    case QuoteAssetsSymbols.EUR:
      return '€';
    case QuoteAssetsSymbols.GBP:
      return '£';
    case QuoteAssetsSymbols.AUD:
      return '$';
    case QuoteAssetsSymbols.BTC:
      return '₿';
    case QuoteAssetsSymbols.ETH:
      return 'Ξ';
    default:
      return '';
  }
};

export const getAssetSymbol = (symbol: string): string => getAssetSymbolOrEmpty(symbol) || symbol;
