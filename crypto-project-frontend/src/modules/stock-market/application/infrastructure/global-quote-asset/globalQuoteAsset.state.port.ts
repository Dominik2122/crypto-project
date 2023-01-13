import { QuoteAssetsSymbols } from '@/modules/stock-market/domain/QuoteAssetsSymbols';

export interface GlobalQuoteAssetStatePort {
  quoteAsset: QuoteAssetsSymbols | undefined;

  updateQuoteAsset(asset: QuoteAssetsSymbols): void;
}
